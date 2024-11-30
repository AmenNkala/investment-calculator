export default function Table({ data }) {
  if (data.length === 0) {
    return (
      <p className='center'>No data available. Please fill out the inputs.</p>
    );
  }

  return (
    <table id='result'>
      <thead>
        <tr className='center'>
          <th>Year</th>
          <th>Interest Earned</th>
          <th>Investment at End of Year</th>
          <th>Annual Investment</th>
        </tr>
      </thead>
      <tbody className='center'>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{row.interest}</td>
            <td>{row.valueEndOfYear}</td>
            <td>{row.annualInvestment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
