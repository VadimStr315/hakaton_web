import { useEffect, useState } from 'react'
import ContentBox from '../../components/contentBox/ContentBox'
import Statistics from '../../components/statistics/Statistics'
import classes from '../styles/Home.module.css'
import data from '../../components/state/data.json'
import classNames from 'classnames'
import macbook from '../../public/img/macbook.png'
import video from '../../public/img/video.png'
import Image from 'next/image'

export default function Home() {
  const [fileName, setFileName] = useState(null)
  const [statistics, setStatistics] = useState(null)
  const [stage, setStage] = useState(1)

  const changeFileName = (newName) =>{setFileName(newName)}
  return (
    <>
    <header className={classNames(classes.header__container, stage === 1 ? classes.header__container1 :  classes.header__container2)}>
      <div className={classes.header__logo}>
        {stage === 1 ? 
        <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M24.0473 23.3693C22.6303 22.5512 20.8184 23.0367 20.0003 24.4537L14.6029 33.8023L5.92526 35.4376V30.1201C5.92526 28.4839 4.59885 27.1574 2.96263 27.1574C1.32641 27.1574 0 28.4839 0 30.1201V45.9208C0 47.557 1.32641 48.8834 2.96263 48.8834H16.7882C18.4245 48.8834 19.7509 47.557 19.7509 45.9208C19.7509 44.2846 18.4245 42.9581 16.7882 42.9581H5.92526V41.4671L16.6076 39.4541C17.1288 39.3559 17.5922 39.1268 17.9701 38.8072C18.4837 38.5574 18.9307 38.1568 19.2377 37.6251L25.1317 27.4164C25.9498 25.9994 25.4643 24.1874 24.0473 23.3693Z" fill="#343434"/>
        <rect x="10.0981" width="37.3548" height="24.6886" rx="5" transform="rotate(18 10.0981 0)" fill="#343434"/>
        <rect x="15.8452" y="5.92526" width="22.2197" height="4.93772" rx="2.46886" transform="rotate(18 15.8452 5.92526)" fill="white"/>
        <rect x="50" y="19.7444" width="14.8132" height="4.93772" rx="2.46886" transform="rotate(108 50 19.7444)" fill="#343434"/>
        <rect x="41.6018" y="20.2446" width="4.93772" height="8.39412" transform="rotate(18 41.6018 20.2446)" fill="#343434"/>
        </svg>        
        :<svg style={{marginRight: '10px'}} width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group 246">
          <path id="Union" fillRule="evenodd" clipRule="evenodd" d="M24.0473 23.3693C22.6303 22.5512 20.8184 23.0367 20.0003 24.4537L14.6029 33.8023L5.92526 35.4376V30.1201C5.92526 28.4839 4.59885 27.1574 2.96263 27.1574C1.32641 27.1574 0 28.4839 0 30.1201V45.9208C0 47.557 1.32641 48.8834 2.96263 48.8834L16.7882 48.8834C18.4245 48.8834 19.7509 47.557 19.7509 45.9208C19.7509 44.2846 18.4245 42.9581 16.7882 42.9581H5.92526V41.4671L16.6076 39.4541C17.1288 39.3559 17.5922 39.1268 17.9702 38.8072C18.4837 38.5574 18.9307 38.1568 19.2377 37.6251L25.1317 27.4164C25.9498 25.9994 25.4643 24.1874 24.0473 23.3693Z" fill="white"/>
          <rect id="Rectangle 1817" x="10.0981" width="37.3548" height="24.6886" rx="5" transform="rotate(18 10.0981 0)" fill="white"/>
          <rect id="Rectangle 1818" x="15.8452" y="5.92526" width="22.2197" height="4.93772" rx="2.46886" transform="rotate(18 15.8452 5.92526)" fill="#343434"/>
          <rect id="Rectangle 1819" x="50" y="19.7444" width="14.8132" height="4.93772" rx="2.46886" transform="rotate(108 50 19.7444)" fill="white"/>
          <rect id="Rectangle 1820" x="41.6018" y="20.2446" width="4.93772" height="8.39412" transform="rotate(18 41.6018 20.2446)" fill="white"/>
          </g>
        </svg>
        }
        <span className={classNames(classes.headerTeamText, stage === 1 ? classes.headerTeamText1 :  classes.headerTeamText2)}>made by the </span>
        <span className={classes.headerTeamFuture}>“Future”</span>
        <span className={classNames(classes.headerTeamText, stage === 1 ? classes.headerTeamText1 :  classes.headerTeamText2)}> team</span>
      </div>
      <svg onClick={()=>{setStage(stage-1)}} style={{cursor:'pointer'}} width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 5221">
        <rect id="Rectangle 1855" width="33.1521" height="5.0691" rx="2.53455" transform="matrix(0.750922 -0.660391 0.354424 0.935085 0.308594 22.26)" fill="white"/>
        <rect id="Rectangle 1856" width="33.1521" height="5.0691" rx="2.53455" transform="matrix(0.750922 0.660391 -0.354424 0.935085 1.79639 0)" fill="white"/>
        </g>
      </svg>
    </header>
    {stage===1 ?
    <main className={classes.main__container2}>
      <div className={classes.preview}>
        <div className={classes.previewLeft}>
          <h1 className={classes.previewLeft__h1}>Детектор видеоаналитики</h1>
          <p className={classes.previewLeft__p}>На основе видео с камеры на строительном объекте  определим использование строительной техники по назначению на объекте</p>
          <button className={classes.previewLeft__button} onClick={()=>{setStage(stage+1)}}>Давайте начнем</button>
        </div>
        <div className={classes.image}></div>
      </div>
      <div className={classes.how__container}>
        <h2 className={classes.how__h2}>Как это работает?</h2>
        <div className={classes.download}> 
          <Image src={macbook} width='700' height='372' alt='notebook'/>
          <div className={classes.download__text}>
            <div style={{marginBottom: '45px'}}>
            <span style={{color: '#FF6712'}}>Загрузите видео</span>
            <span> с камер видеонаблюдения на наш сайт</span>
            </div>
            <span>Наш алгоритм сам проанализирует видеозапись и подготовит статистику</span>
          </div>
        </div>
        <svg className={classes.download__svg} width="560" height="206" viewBox="0 0 560 206" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M559 177.005L557.734 165.527L548.427 172.362L559 177.005ZM194.604 130.054L195.052 130.948L194.604 130.054ZM261.045 131.666L261.536 130.795L261.045 131.666ZM391.838 137.122L392.298 138.01L391.838 137.122ZM558.311 176.066L559.117 175.475L558.311 176.066ZM132.429 199.356L133.138 198.651L132.429 199.356ZM380.339 143.076L380.799 143.964L380.339 143.076ZM278.093 141.271L278.583 140.4L278.093 141.271ZM130.321 197.241L129.613 197.947L130.321 197.241ZM136.517 159.165L136.965 160.059L136.517 159.165ZM155.794 166.633L155.357 167.532L155.794 166.633ZM0.0351084 1.26265C0.478693 2.89225 1.03128 5.39455 1.66894 8.60549L3.63063 8.21592C2.99148 4.99747 2.42781 2.43799 1.96489 0.737351L0.0351084 1.26265ZM4.39448 23.5307C4.8056 25.9136 5.22982 28.417 5.66382 31.0162L7.63651 30.6868C7.20201 28.0846 6.77718 25.5776 6.36536 23.1907L4.39448 23.5307ZM5.66382 31.0162C6.00558 33.063 6.39123 35.0963 6.8199 37.1147L8.77627 36.6992C8.35366 34.7093 7.97345 32.7048 7.63651 30.6868L5.66382 31.0162ZM9.92795 49.1248C11.1448 53.0971 12.5322 56.9979 14.0829 60.8172L15.936 60.0649C14.4074 56.3001 13.0398 52.4548 11.8402 48.539L9.92795 49.1248ZM19.2557 72.0949C21.1502 75.7836 23.2044 79.3783 25.4107 82.8685L27.1013 81.7999C24.9268 78.36 22.9021 74.817 21.0347 71.1812L19.2557 72.0949ZM32.5049 93.0499C35.022 96.3369 37.685 99.5078 40.4865 102.552L41.9581 101.197C39.1976 98.1979 36.5733 95.0733 34.0928 91.8339L32.5049 93.0499ZM49.2975 111.291C52.361 114.064 55.5545 116.7 58.8705 119.189L60.0709 117.589C56.8042 115.138 53.658 112.541 50.6396 109.808L49.2975 111.291ZM69.1306 126.171C72.6425 128.331 76.2666 130.335 79.9953 132.174L80.8802 130.381C77.2073 128.569 73.6375 126.595 70.1781 124.468L69.1306 126.171ZM91.3679 137.141C93.2949 137.878 95.2452 138.573 97.218 139.225L97.8452 137.326C95.9018 136.684 93.9806 135.999 92.0824 135.273L91.3679 137.141ZM97.094 139.174L101.949 141.538L102.824 139.739L97.9693 137.376L97.094 139.174ZM111.66 146.264L121.37 150.99L122.245 149.192L112.535 144.466L111.66 146.264ZM131.081 155.717L140.791 160.443L141.666 158.644L131.956 153.918L131.081 155.717ZM150.501 165.169L155.357 167.532L156.232 165.734L151.377 163.371L150.501 165.169ZM155.357 167.532C156.896 168.282 158.275 169.19 159.493 170.223L160.787 168.699C159.442 167.557 157.922 166.556 156.232 165.734L155.357 167.532ZM165.068 178.241C166.202 181.346 166.537 184.711 166.035 187.979L168.012 188.283C168.565 184.682 168.197 180.976 166.946 177.554L165.068 178.241ZM162.146 196.936C161.156 198.189 159.982 199.351 158.62 200.388L159.832 201.979C161.327 200.841 162.621 199.561 163.715 198.177L162.146 196.936ZM158.62 200.388C156.717 201.839 154.622 202.886 152.444 203.539L153.018 205.455C155.423 204.734 157.734 203.578 159.832 201.979L158.62 200.388ZM138.829 202.611C136.76 201.668 134.827 200.346 133.138 198.651L131.721 200.062C133.583 201.931 135.716 203.39 138 204.431L138.829 202.611ZM133.138 198.651L132.611 198.122L131.194 199.533L131.721 200.062L133.138 198.651ZM131.557 197.064L131.03 196.535L129.613 197.947L130.14 198.476L131.557 197.064ZM131.03 196.535C129.721 195.221 128.612 193.803 127.697 192.311L125.992 193.356C126.988 194.981 128.194 196.522 129.613 197.947L131.03 196.535ZM124.437 182.153C124.175 178.559 124.765 174.935 126.153 171.609L124.307 170.839C122.799 174.454 122.158 178.391 122.442 182.298L124.437 182.153ZM132.465 163.008C133.806 161.884 135.307 160.89 136.965 160.059L136.069 158.271C134.271 159.172 132.639 160.252 131.18 161.476L132.465 163.008ZM136.965 160.059L141.806 157.633L140.909 155.845L136.069 158.271L136.965 160.059ZM151.487 152.781L161.168 147.929L160.272 146.141L150.591 150.993L151.487 152.781ZM170.849 143.077L180.53 138.226L179.634 136.438L169.953 141.289L170.849 143.077ZM190.212 133.374L195.052 130.948L194.156 129.16L189.316 131.586L190.212 133.374ZM195.052 130.948C196.755 130.095 198.483 129.315 200.232 128.61L199.485 126.755C197.685 127.481 195.907 128.282 194.156 129.16L195.052 130.948ZM211.074 125.237C214.785 124.406 218.547 123.884 222.32 123.668L222.206 121.671C218.324 121.893 214.455 122.431 210.637 123.285L211.074 125.237ZM233.672 123.943C237.43 124.342 241.162 125.046 244.829 126.056L245.359 124.127C241.588 123.089 237.749 122.364 233.883 121.954L233.672 123.943ZM255.494 129.951C257.207 130.74 258.895 131.602 260.554 132.537L261.536 130.795C259.83 129.833 258.093 128.946 256.331 128.135L255.494 129.951ZM260.554 132.537L264.816 134.938L265.798 133.196L261.536 130.795L260.554 132.537ZM273.34 139.741L277.602 142.142L278.583 140.4L274.322 137.998L273.34 139.741ZM277.602 142.142C279.562 143.246 281.548 144.285 283.557 145.259L284.429 143.459C282.457 142.503 280.507 141.484 278.583 140.4L277.602 142.142ZM295.988 150.359C300.249 151.806 304.579 152.98 308.954 153.883L309.358 151.924C305.064 151.038 300.813 149.885 296.631 148.465L295.988 150.359ZM322.256 155.777C326.725 156.133 331.212 156.212 335.691 156.014L335.602 154.016C331.206 154.21 326.802 154.133 322.415 153.783L322.256 155.777ZM349.051 154.591C353.455 153.844 357.825 152.823 362.134 151.527L361.558 149.612C357.329 150.883 353.04 151.886 348.717 152.619L349.051 154.591ZM374.737 146.869C376.78 145.967 378.801 144.999 380.799 143.964L379.879 142.188C377.918 143.204 375.934 144.154 373.929 145.04L374.737 146.869ZM380.799 143.964L383.674 142.476L382.754 140.7L379.879 142.188L380.799 143.964ZM389.423 139.499L392.298 138.01L391.378 136.234L388.504 137.723L389.423 139.499ZM392.298 138.01C394.015 137.122 395.743 136.274 397.482 135.468L396.641 133.654C394.875 134.472 393.121 135.332 391.378 136.234L392.298 138.01ZM408.157 131.08C411.8 129.768 415.477 128.626 419.177 127.654L418.668 125.719C414.911 126.707 411.178 127.866 407.479 129.199L408.157 131.08ZM430.457 125.218C434.264 124.572 438.085 124.098 441.908 123.794L441.75 121.8C437.868 122.109 433.988 122.59 430.122 123.247L430.457 125.218ZM453.441 123.39C457.296 123.425 461.141 123.632 464.965 124.006L465.16 122.016C461.278 121.636 457.374 121.426 453.46 121.39L453.441 123.39ZM476.391 125.636C480.173 126.347 483.923 127.224 487.628 128.265L488.169 126.339C484.407 125.283 480.6 124.392 476.76 123.67L476.391 125.636ZM498.591 131.872C502.184 133.233 505.722 134.754 509.192 136.432L510.063 134.631C506.539 132.928 502.947 131.384 499.299 130.002L498.591 131.872ZM519.349 141.91C522.641 143.879 525.855 145.998 528.981 148.267L530.155 146.648C526.981 144.345 523.718 142.192 520.376 140.194L519.349 141.91ZM538.01 155.453C540.894 157.966 543.683 160.62 546.366 163.413L547.808 162.027C545.084 159.192 542.253 156.497 539.323 153.945L538.01 155.453ZM553.987 172.081C555.188 173.574 556.361 175.1 557.505 176.658L559.117 175.475C557.955 173.893 556.765 172.344 555.545 170.828L553.987 172.081ZM557.505 176.658L557.677 176.893L559.289 175.709L559.117 175.475L557.505 176.658Z" fill="#FF6712"/>
        </svg>
        <div className={classes.result__container}>
          <div className={classes.result__text}>
            <div style={{marginBottom: '45px'}}>
              <span>Вы можете ознакомиться с подробной статистикой на сайте</span>
            </div>
            <div style={{marginBottom:'50px'}}>
              <span>А также скачать готовый файл </span>
              <span style={{color: '#FF6712'}}>JSON</span>
            </div>
            <button onClick={()=>{setStage(stage+1)}} className={classes.result__btn}>Давайте начнем</button>
          </div>
          <Image src={video}  width='630' height='400' alt='video'/>
        </div>
      </div>
      <footer className={classes.footer}></footer>
    </main>
    :
    <main className={classes.main__container}>
      <ContentBox changeFileName={changeFileName} changeStatistics={setStatistics}/>
      <Statistics fileName={fileName} statistics={statistics}/>
    </main>}
    </>
  )
}