import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div class="main">
            <div class="contactinfo">
                <img class="location" src="https://image.flaticon.com/icons/svg/967/967848.svg"></img>
                <p>г.Алматы Тимирязева 15б</p>
                <img class="phone" src="https://image.flaticon.com/icons/svg/131/131131.svg"></img>
                <p>+7 (727) 313-15-16</p>
            </div>

            <div class="header">
              <div class="text">
                  <h1>ТОО "Конструкторские решения"</h1>
                  <h3>специализируется на исследованиях и разработках в области естественных наук и инженерии.</h3>
              </div>
              <div class="curtain"></div>
              <div class="image">
                  <img src="http://stroyagregat.ru/templates/highly-build-utf8/images/big-img.jpg"></img>
              </div>

              <div class="info">
                  <div class="section">
                      <img src="https://ptcsp.ru/files/project_5201/service_rubricator/service-img3_mini3.jpg"></img>
                      <p>В ТОО трудятся квалифицированные специалисты в области инженерии, конструирования, электромеханики.</p>
                  </div>
                  <div class="section">
                      <img src="https://www.psychologos.ru/images/articles/showcases/49dq85bo.jpg"></img>
                      <p>Приоритетной задачей ТОО являются новые решения в области улучшения условий труда крупных промышленных предприятий.</p>
                  </div>
                  <div class="section">
                      <img src="https://xn--90a8a7a.com/wp-content/uploads/2018/06/строительная-экспертиза24.png"></img>
                      <p>ТОО обладает соответствующей материально-технической базой для воплощения новаторских идей.</p>
                  </div>
                  <div class="section">
                      <img src="http://rtp01.ru/sites/default/files/styles/large/public/konstruktorskie_reseniya_0.jpg?itok=6JseJOdW"></img>
                      <p>В настоящее время на базе ТОО разрабатываются перспективные идеи, а так же имеются готовые к реализации проекты.</p>
                  </div>
              </div>
            </div>

            <div class="contactinfo">
                <img class="location" src="https://image.flaticon.com/icons/svg/967/967848.svg"></img>
                <p>г.Алматы Тимирязева 15б</p>
                <img class="phone" src="https://image.flaticon.com/icons/svg/131/131131.svg"></img>
                <p>+7 (727) 313-15-16</p>
            </div>
        </div>
    );
  }
}

export default App;
