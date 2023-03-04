import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style ={{
      margin: 'auto',
      width: 800,
      paddingTop: 'lrem'
    }}>
      <h1 className='title'>Pokemon Search</h1>
      <table width="100%">
        <thead>
          <th>Name</th>
          <th>Type</th>
        </thead>
        <tbody> 
          <tr>
            <td>Balbusaur</td>
            <td>Grass, poison</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
