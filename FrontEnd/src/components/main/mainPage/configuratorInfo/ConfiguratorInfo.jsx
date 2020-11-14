import React, { } from 'react'


import s from './ConfiguratorInfo.module.css';


import configInfo from '../../../../images/configurator/configInfo.png';



const ConfiguratorInfo = () => {



  return (

    <section className={s.configBlock}>
      <div className={s.info}>
        <h1>Собери компьютер на свой вкус!</h1>
        <p>Создайте сборку компьютера своей мечты!</p>
        <button>Перейти в конфигуратор PC</button>
      </div>
      <div>
        <img src={configInfo} alt="" />
      </div>
      <div className={s.buttons}>
        <div>
          <i className="fas fa-gamepad"></i>
          <h2>Игровая сборка</h2>
        </div>
        <div>
          <i className="fas fa-print"></i>
          <h2>Офисная сборка</h2>
        </div>
      </div>
    </section>

  )


}

export default ConfiguratorInfo;