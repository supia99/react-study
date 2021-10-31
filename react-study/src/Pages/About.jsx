import { useHistory } from 'react-router-dom';

function About() {

  const history = useHistory();

  return (
    <div>
      Aboutページです。<br />
      URLに注目！<br />
      <button onClick={() => history.goBack()}>戻る</button>
    </div>
    
  )
}

export default About;