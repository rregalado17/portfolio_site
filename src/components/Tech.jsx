import ReactApexChart from 'react-apexcharts';
import styles from '../style';

const Tech = ({ languages }) => {
    const chartOptions = {
        labels: languages.map(({ language }) => language),
            plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        value: {
                        formatter: function (val) {
                            return val + (val > 1 ? ' repositories' : ' repository');
                        },
                        style: {
                            color: ['ffffff']
                        }
                        },
                    },
                },
            },
        },
    };

  const chartSeries = languages.map(({ count }) => count);

  return (
        <div className='px-1200 py-12 rounded-[20px] w-[550px] h-[500px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="donut"
                height={400}
            />
        </div>
    
    );
};

export default Tech;

