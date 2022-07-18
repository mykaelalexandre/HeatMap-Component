import * as React from 'react';
import HeatMap from 'react-heatmap-grid';

const xLabels = ['', '', '', '', '', '', '', '', '', ''];
const yLabels = ['', '', ''];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length)
      .fill(0)
      .map(() => (Math.random() * (5 - 0) + 0.1).toFixed(1))
  );

export default function () {
  return (
    <div style={{ fontSize: '12px', boder: 'solid 1px' }}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        yLabelTextAlign={'center'}
        xLabelsLocation={'top'}
        xLabelWidth={102.8}
        data={data}
        rectangle
        yLabelsPaddding={10}
        height={56}
        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
        cellStyle={(background, value, min, max, data, x, y) => {
          if (value >= 0 && value <= 1.9) {
            background = '#FF8080'; // vermelho
          } else if (value >= 2 && value <= 3.9) {
            background = '#FFDD80'; //amarelo
          } else if (value >= 4 && value <= 5) {
            background = '#89E59C'; // verde
          }
          return {
            background: background,
            fontSize: '16px',
            color: '#444',
          };
        }}
        cellRender={(value) => value && <div>{value}</div>}
      />
    </div>
  );
}
