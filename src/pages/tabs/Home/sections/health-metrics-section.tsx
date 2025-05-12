import MentalHealthMetrics from '../../../../components/mental-health-metrics';

const HealthMetricsSection = () => {
	return (
		<MentalHealthMetrics
			freudScore={80}
			mood="Sad"
			moodColor="#FF7043"
			journalDays={31}
		/>
	);
};

export default HealthMetricsSection;
