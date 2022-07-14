import * as React from 'react';
import HeatMap from 'react-heatmap-grid';

const xLabels = [
  'Média',
  'Bem-Estar',
  'Conexão com os colegas',
  'Conexão com o líder',
  'Conhecimento pessoal',
  'Cultura',
  'Embaixador',
  'Empoderamento',
  'Reconh. e Feedback',
  'Satisfação',
];

// Display only even labels

const yLabels = ['Time 1', 'Time 2', 'Time 3'];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length)
      .fill(0)
      .map(() => (Math.random() * (5 - 0) + 0.2).toFixed(1))
  );
console.log(data);
const defineBackground = ['#FF8080', '#FFDD80', '#89E59C'];

export default function () {
  return (
    <div style={{ fontSize: '16px' }}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={'top'}
        xLabelWidth={102.8}
        data={data}
        rectangle
        height={56}
        padding={0}
        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(137, 229, 156, ${1 - (max - value) / (max - min)})`,
          fontSize: '16px',
          color: '#444',
        })}
        cellRender={(value) => value && <div>{value}</div>}
      />
    </div>
  );
}
