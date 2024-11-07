export default function json2html(data) {
  let table = '<table data-user="binduvasinip@gmail.com">';
  table += '<thead><tr>';
  
  // Extract column headers dynamically from the first object
  const headers = Object.keys(data[0]);
  headers.forEach(header => {
    table += `<th>${header}</th>`;
  });

  table += '</tr></thead><tbody>';
  
  // Loop through the data and create table rows
  data.forEach(item => {
    table += '<tr>';
    headers.forEach(header => {
      table += `<td>${item[header] || ''}</td>`;  // Handle missing properties
    });
    table += '</tr>';
  });
  
  table += '</tbody></table>';
  return table;
}
