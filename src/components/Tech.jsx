import styles from '../style';
import ReactApexChart from 'react-apexcharts';


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
    <section>
    <div>
      <div ><ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        height={400}
      />
      </div>
    </div>
    </section>
  );
};

export default Tech;

