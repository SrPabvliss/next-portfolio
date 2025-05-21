#!/usr/bin/env node
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

interface OptimizeOptions {
  inputDir: string;
  outputDir: string;
  sizes: Record<string, number>;
  quality: number;
  formats: string[];
}

interface OptimizationStats {
  originalSize: number;
  optimizedSize: number;
  savedSpace: number;
  percentageSaved: number;
  processedFiles: number;
}

const DEFAULT_OPTIONS: OptimizeOptions = {
  inputDir: 'public/images',
  outputDir: 'public/optimized-images',
  sizes: {
    medium: 1200,
  },
  quality: 100,
  formats: ['webp']
};

const stats: OptimizationStats = {
  originalSize: 0,
  optimizedSize: 0,
  savedSpace: 0,
  percentageSaved: 0,
  processedFiles: 0
};

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function processDirectory(dir: string, options: OptimizeOptions, relativePath: string = '') {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const newRelativePath = path.join(relativePath, entry.name);

    if (entry.isDirectory()) {
      const outputDir = path.join(options.outputDir, newRelativePath);
      await fs.mkdir(outputDir, { recursive: true });
      await processDirectory(fullPath, options, newRelativePath);
    } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
      await processImage(fullPath, newRelativePath, options);
    }
  }
}

async function processImage(inputPath: string, relativePath: string, options: OptimizeOptions) {
  try {
    const image = sharp(inputPath);
    const fileName = path.parse(relativePath).name;
    const outputDir = path.join(options.outputDir, path.dirname(relativePath));

    const originalStats = await fs.stat(inputPath);
    stats.originalSize += originalStats.size;
    stats.processedFiles++;

    for (const [size, _] of Object.entries(options.sizes)) {
      for (const format of options.formats) {
        const outputPath = path.join(
          outputDir,
          `${fileName}-${size}.${format}`
        );

        await image
          .toFormat(format as any, { quality: options.quality })
          .toFile(outputPath);

        const optimizedStats = await fs.stat(outputPath);
        stats.optimizedSize += optimizedStats.size;
      }
    }
  } catch (error) {
    console.error(`Error processing image ${inputPath}:`, error);
  }
}

async function optimizeImages(options: Partial<OptimizeOptions> = {}) {
  const finalOptions = { ...DEFAULT_OPTIONS, ...options };
  
  try {
    console.log('Starting image optimization...');
    console.log('Options:', finalOptions);
    
    await fs.mkdir(finalOptions.outputDir, { recursive: true });
    await processDirectory(finalOptions.inputDir, finalOptions);
    
    stats.savedSpace = stats.originalSize - stats.optimizedSize;
    stats.percentageSaved = (stats.savedSpace / stats.originalSize) * 100;
    
    console.log('\nOptimization Statistics:');
    console.log('------------------------');
    console.log(`Total files processed: ${stats.processedFiles}`);
    console.log(`Original size: ${formatBytes(stats.originalSize)}`);
    console.log(`Optimized size: ${formatBytes(stats.optimizedSize)}`);
    console.log(`Space saved: ${formatBytes(stats.savedSpace)} (${stats.percentageSaved.toFixed(2)}%)`);
    console.log('------------------------');
    
  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

optimizeImages(); 