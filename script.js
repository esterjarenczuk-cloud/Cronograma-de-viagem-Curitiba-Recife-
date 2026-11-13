document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('graficoEvolucao').getContext('2d');

    const anos = ['2026 (18 anos)', '2027 (19 anos)', '2028 (20 anos)', '2029 (21 anos)', '2030 (22 anos)', '2031 (23 anos)', '2032 (24 anos)'];
    const valorFinal = [180.00, 387.00, 624.15, 894.94, 1203.22, 1553.28, 1949.82];
    const reservaAnual = [180.00, 198.00, 217.80, 239.58, 263.54, 289.89, 318.88];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: anos,
            datasets: [
                {
                    type: 'line',
                    label: 'Valor Final Acumulado (R$)',
                    data: valorFinal,
                    borderColor: '#2b6cb0',
                    backgroundColor: '#2b6cb0',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: false
                },
                {
                    type: 'bar',
                    label: 'Reserva Anual Guardada (R$)',
                    data: reservaAnual,
                    backgroundColor: 'rgba(56, 161, 105, 0.7)',
                    borderColor: '#38a169',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Evolução da Reserva Financeira com Juros de 5% ao ano'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value.toLocaleString('pt-BR');
                        }
                    }
                }
            }
        }
    });
});
