document.addEventListener('DOMContentLoaded', function() {
    const graphic = echarts.init(document.getElementById('graphic-chart'));

    let option = {
        color: ['#e61c64', '#ef7728', '#ccd622', '#cce6e9'],
        angleAxis: {
            type: 'category',
            data: ['Réussite personnelle', 'Émotions positives', 'Harmonie sociale', 'Spiritualité']
        },
        radiusAxis: {},
        polar: {},
        series: [
            {
                type: 'bar',
                data: [75, 85, 70, 65],
                coordinateSystem: 'polar',
                name: 'Influence sur le bonheur',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            },
            {
                type: 'bar',
                data: [50, 60, 90, 80],
                coordinateSystem: 'polar',
                name: 'Asie',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            },
            {
                type: 'bar',
                data: [85, 95, 50, 40],
                coordinateSystem: 'polar',
                name: 'Occident',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            },
            {
                type: 'bar',
                data: [60, 75, 85, 70],
                coordinateSystem: 'polar',
                name: 'Afrique',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            }
        ],
        legend: {
            show: true,
            data: ['Influence sur le bonheur', 'Asie', 'Occident', 'Afrique']
        }
    };

    graphic.setOption(option);

    window.addEventListener('resize', () => {
        graphic.resize();
    });
});
