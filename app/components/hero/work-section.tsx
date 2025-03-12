import workCards from "@/app/constants/work-cards";
import WorkCard from "./work-card";

const WorkSection = () => {
	return (
		<div className="flex justify-between gap-8 px-80">
			{workCards.map((card, index) => (
				<WorkCard key={index} {...card} />
			))}
		</div>
	);
};

export default WorkSection;
