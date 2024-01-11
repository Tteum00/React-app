import './App.css';

function AppJSX() {
  const name = 'Tteum';
  const list = ['딸기', '바나나', '우유']
  return (
    <>
      <h1 className='orange'>{`Hello ${name}`}</h1>
      <h2>Hello</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
