import React from 'react';

import s from './GitHubRepos.module.css';

class GitHub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: <p>Loading...</p>
        };
    }

    componentDidMount() {
        // выполняем запрос на получение данных
        fetch('/req', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => { return response.json() })
            .then(data => {
                // мапим данные нужным нам способом
                const body = data.map(repo => {
                    return (
                      <div key={repo.Name}>
                      <hr/>
                        <div className={s.Reposit}>
                
                          <div className={`${s.Name} ${s.Block}`}><a href={repo.Url}>{repo.Name}</a></div>
                          <div className={`${s.Descrip} ${s.Block}`}>{repo.Description}</div>
                          <div className={`${s.Language} ${s.Block}`}>{repo.Language}</div>
                          <div className={`${s.Create} ${s.Block}`}>{repo.CreateAt.substring(0,10)}</div>
                          <div className={`${s.Update} ${s.Block}`}>{repo.LastUpdate.substring(0,10)}</div>
                          <div className={`${s.Size} ${s.Block}`}>{repo.Size}</div>
                
                      </div>
                    </div>
                    )
                });
                // присваиваем новое значение переменной `body`
                this.setState({ body });
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className={s.RepAll}> 
      <div className={s.Top}>
          <div className={`${s.Name} ${s.Block}`}>Name</div>
          <div className={`${s.Descrip} ${s.Block}`}>Description</div>
          <div className={`${s.Language} ${s.Block}`}>Language</div>
          <div className={`${s.Create} ${s.Block}`}>Create</div>
          <div className={`${s.Update} ${s.Block}`}>Last update</div>
          <div className={`${s.Size} ${s.Block}`}>Size (Kb)</div>
      </div>
      {this.state.body}
      </div>
        )
    }
}

export default GitHub;