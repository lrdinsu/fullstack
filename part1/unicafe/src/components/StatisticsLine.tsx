type StatisticsLineProps = {
  text: string;
  value: string;
};

export function StatisticsLine({ text, value }: StatisticsLineProps) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}
