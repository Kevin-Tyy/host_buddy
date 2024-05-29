import Image from 'next/image';
import React from 'react';

const HeroHosting = () => {
  return (
    <section className="h-full min-h-[80vh] overflow-hidden relative bg-black flex items-center justify-center">
    <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
   
    <div className="max-w-[1300px] mx-auto text-white  px-10 pt-40 pb-10 ">
      <div className="slide-reveal h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center gap-20">
        
        <div className="relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-5 2xl:space-y-8">
          <div className='relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-0'>
          <svg  className="absolute -top-20 2xl:-top-32" width="208" height="24" viewBox="0 0 208 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.674 17V3.878H2.204V9.926L1.952 9.674H10.394L10.142 9.926V3.878H11.672V17H10.142V10.772L10.394 11.024H1.952L2.204 10.772V17H0.674ZM18.6353 17.162C17.9513 17.162 17.3273 17.048 16.7633 16.82C16.2113 16.592 15.7313 16.262 15.3233 15.83C14.9273 15.398 14.6153 14.888 14.3873 14.3C14.1713 13.7 14.0633 13.034 14.0633 12.302C14.0633 11.33 14.2493 10.478 14.6213 9.746C14.9933 9.014 15.5213 8.444 16.2053 8.036C16.9013 7.616 17.7113 7.406 18.6353 7.406C19.3193 7.406 19.9373 7.52 20.4893 7.748C21.0533 7.964 21.5333 8.288 21.9293 8.72C22.3253 9.152 22.6313 9.668 22.8473 10.268C23.0633 10.868 23.1713 11.54 23.1713 12.284C23.1713 13.244 22.9853 14.09 22.6133 14.822C22.2533 15.554 21.7313 16.13 21.0473 16.55C20.3633 16.958 19.5593 17.162 18.6353 17.162ZM18.6353 15.902C19.2473 15.902 19.7813 15.764 20.2373 15.488C20.6933 15.2 21.0473 14.786 21.2993 14.246C21.5633 13.694 21.6953 13.04 21.6953 12.284C21.6953 11.72 21.6233 11.216 21.4793 10.772C21.3353 10.316 21.1313 9.932 20.8673 9.62C20.6033 9.296 20.2853 9.05 19.9133 8.882C19.5413 8.714 19.1153 8.63 18.6353 8.63C18.0233 8.63 17.4833 8.78 17.0153 9.08C16.5593 9.368 16.1993 9.782 15.9353 10.322C15.6833 10.862 15.5573 11.522 15.5573 12.302C15.5573 12.854 15.6233 13.358 15.7553 13.814C15.8993 14.258 16.1033 14.636 16.3673 14.948C16.6433 15.26 16.9733 15.5 17.3573 15.668C17.7413 15.824 18.1673 15.902 18.6353 15.902ZM25.241 17V7.55H26.627L26.681 9.512H26.789C27.065 8.816 27.497 8.294 28.085 7.946C28.673 7.586 29.321 7.406 30.029 7.406C30.749 7.406 31.385 7.58 31.937 7.928C32.489 8.276 32.885 8.858 33.125 9.674H33.269C33.545 8.918 33.989 8.354 34.601 7.982C35.225 7.598 35.921 7.406 36.689 7.406C37.325 7.406 37.889 7.538 38.381 7.802C38.885 8.066 39.281 8.498 39.569 9.098C39.857 9.686 40.001 10.466 40.001 11.438V17H38.561V11.726C38.561 11.018 38.471 10.436 38.291 9.98C38.123 9.524 37.865 9.188 37.517 8.972C37.181 8.744 36.737 8.63 36.185 8.63C35.621 8.63 35.123 8.774 34.691 9.062C34.271 9.35 33.941 9.74 33.701 10.232C33.473 10.712 33.359 11.264 33.359 11.888V17H31.883V11.726C31.883 11.018 31.799 10.436 31.631 9.98C31.463 9.524 31.205 9.188 30.857 8.972C30.521 8.744 30.083 8.63 29.543 8.63C28.967 8.63 28.463 8.774 28.031 9.062C27.611 9.35 27.281 9.74 27.041 10.232C26.801 10.712 26.681 11.264 26.681 11.888V17H25.241ZM46.2614 17.162C45.3614 17.162 44.5874 16.964 43.9394 16.568C43.3034 16.172 42.8174 15.608 42.4814 14.876C42.1454 14.144 41.9774 13.292 41.9774 12.32C41.9774 11.324 42.1454 10.46 42.4814 9.728C42.8174 8.984 43.2974 8.414 43.9214 8.018C44.5454 7.61 45.3074 7.406 46.2074 7.406C47.1674 7.406 47.9594 7.622 48.5834 8.054C49.2074 8.486 49.6574 9.086 49.9334 9.854C50.2214 10.622 50.3294 11.51 50.2574 12.518H43.3994C43.4114 13.298 43.5314 13.952 43.7594 14.48C43.9994 14.996 44.3294 15.386 44.7494 15.65C45.1814 15.902 45.6854 16.028 46.2614 16.028C46.9574 16.028 47.5274 15.854 47.9714 15.506C48.4154 15.158 48.6974 14.702 48.8174 14.138H50.2034C50.1314 14.774 49.9094 15.32 49.5374 15.776C49.1774 16.232 48.7094 16.58 48.1334 16.82C47.5694 17.048 46.9454 17.162 46.2614 17.162ZM43.4174 11.69L43.2554 11.474H48.9974L48.8354 11.726C48.8474 10.97 48.7454 10.364 48.5294 9.908C48.3134 9.44 48.0014 9.098 47.5934 8.882C47.1974 8.654 46.7354 8.54 46.2074 8.54C45.6554 8.54 45.1754 8.66 44.7674 8.9C44.3594 9.14 44.0354 9.494 43.7954 9.962C43.5674 10.418 43.4414 10.994 43.4174 11.69Z" fill="white"/>
<path d="M80.976 19.162C79.812 19.162 78.846 18.982 78.078 18.622C77.31 18.262 76.734 17.764 76.35 17.128C75.966 16.48 75.768 15.736 75.756 14.896H77.772C77.784 15.448 77.904 15.934 78.132 16.354C78.372 16.762 78.726 17.074 79.194 17.29C79.662 17.506 80.268 17.614 81.012 17.614C81.936 17.614 82.674 17.446 83.226 17.11C83.79 16.774 84.072 16.258 84.072 15.562C84.072 15.166 84.012 14.836 83.892 14.572C83.772 14.308 83.574 14.092 83.298 13.924C83.034 13.744 82.68 13.594 82.236 13.474C81.792 13.354 81.252 13.24 80.616 13.132C79.86 13 79.194 12.844 78.618 12.664C78.054 12.472 77.58 12.238 77.196 11.962C76.824 11.674 76.542 11.326 76.35 10.918C76.158 10.51 76.062 10.03 76.062 9.478C76.062 8.71 76.254 8.044 76.638 7.48C77.022 6.916 77.574 6.484 78.294 6.184C79.014 5.884 79.878 5.734 80.886 5.734C81.894 5.734 82.752 5.896 83.46 6.22C84.168 6.532 84.714 6.976 85.098 7.552C85.482 8.116 85.68 8.788 85.692 9.568H83.694C83.682 9.04 83.55 8.608 83.298 8.272C83.058 7.924 82.722 7.666 82.29 7.498C81.87 7.33 81.378 7.246 80.814 7.246C80.238 7.246 79.746 7.33 79.338 7.498C78.942 7.654 78.636 7.882 78.42 8.182C78.204 8.47 78.096 8.812 78.096 9.208C78.096 9.688 78.21 10.06 78.438 10.324C78.678 10.588 79.056 10.798 79.572 10.954C80.088 11.098 80.766 11.248 81.606 11.404C82.194 11.488 82.752 11.608 83.28 11.764C83.82 11.92 84.3 12.136 84.72 12.412C85.152 12.688 85.488 13.066 85.728 13.546C85.98 14.014 86.106 14.626 86.106 15.382C86.106 16.126 85.908 16.786 85.512 17.362C85.128 17.926 84.552 18.37 83.784 18.694C83.028 19.006 82.092 19.162 80.976 19.162ZM88.1964 22.006V9.478H89.9784L90.0504 11.35H90.1584C90.3864 10.738 90.7824 10.246 91.3464 9.874C91.9224 9.502 92.6064 9.316 93.3984 9.316C93.9744 9.316 94.4964 9.424 94.9644 9.64C95.4444 9.856 95.8584 10.174 96.2064 10.594C96.5544 11.014 96.8184 11.53 96.9984 12.142C97.1904 12.754 97.2864 13.456 97.2864 14.248C97.2864 15.304 97.1244 16.198 96.8004 16.93C96.4764 17.662 96.0204 18.22 95.4324 18.604C94.8564 18.976 94.1784 19.162 93.3984 19.162C92.8824 19.162 92.4024 19.078 91.9584 18.91C91.5264 18.742 91.1544 18.508 90.8424 18.208C90.5424 17.896 90.3144 17.536 90.1584 17.128H90.0504V22.006H88.1964ZM92.7504 17.632C93.2784 17.632 93.7404 17.506 94.1364 17.254C94.5324 17.002 94.8384 16.624 95.0544 16.12C95.2824 15.616 95.3964 14.992 95.3964 14.248C95.3964 13.492 95.2824 12.868 95.0544 12.376C94.8384 11.872 94.5324 11.494 94.1364 11.242C93.7404 10.978 93.2784 10.846 92.7504 10.846C92.1744 10.846 91.6824 10.984 91.2744 11.26C90.8784 11.524 90.5784 11.878 90.3744 12.322C90.1704 12.754 90.0684 13.216 90.0684 13.708V14.77C90.0684 15.142 90.1224 15.502 90.2304 15.85C90.3504 16.186 90.5244 16.492 90.7524 16.768C90.9804 17.032 91.2624 17.242 91.5984 17.398C91.9344 17.554 92.3184 17.632 92.7504 17.632ZM103.209 19.162C102.285 19.162 101.487 18.964 100.815 18.568C100.155 18.16 99.6508 17.59 99.3028 16.858C98.9548 16.126 98.7808 15.268 98.7808 14.284C98.7808 13.276 98.9548 12.4 99.3028 11.656C99.6508 10.912 100.149 10.342 100.797 9.946C101.457 9.538 102.243 9.334 103.155 9.334C104.151 9.334 104.973 9.562 105.621 10.018C106.281 10.462 106.755 11.08 107.043 11.872C107.331 12.664 107.439 13.576 107.367 14.608H100.599C100.611 15.304 100.725 15.886 100.941 16.354C101.157 16.81 101.457 17.158 101.841 17.398C102.237 17.626 102.693 17.74 103.209 17.74C103.845 17.74 104.367 17.59 104.775 17.29C105.183 16.978 105.441 16.576 105.549 16.084H107.313C107.229 16.72 107.001 17.272 106.629 17.74C106.257 18.196 105.777 18.55 105.189 18.802C104.601 19.042 103.941 19.162 103.209 19.162ZM100.617 13.582L100.437 13.348H105.729L105.549 13.6C105.561 12.94 105.465 12.4 105.261 11.98C105.069 11.56 104.787 11.254 104.415 11.062C104.055 10.858 103.635 10.756 103.155 10.756C102.651 10.756 102.213 10.864 101.841 11.08C101.469 11.296 101.175 11.614 100.959 12.034C100.743 12.454 100.629 12.97 100.617 13.582ZM113.462 19.162C112.766 19.162 112.13 19.048 111.554 18.82C110.99 18.58 110.504 18.244 110.096 17.812C109.7 17.38 109.388 16.864 109.16 16.264C108.944 15.664 108.836 14.992 108.836 14.248C108.836 13.264 109.028 12.406 109.412 11.674C109.796 10.93 110.342 10.354 111.05 9.946C111.758 9.538 112.586 9.334 113.534 9.334C114.302 9.334 114.986 9.478 115.586 9.766C116.198 10.054 116.684 10.456 117.044 10.972C117.416 11.488 117.626 12.088 117.674 12.772H115.874C115.802 12.352 115.652 12.004 115.424 11.728C115.196 11.452 114.914 11.242 114.578 11.098C114.254 10.954 113.888 10.882 113.479 10.882C112.892 10.882 112.394 11.026 111.986 11.314C111.578 11.59 111.266 11.98 111.05 12.484C110.834 12.988 110.726 13.582 110.726 14.266C110.726 14.974 110.84 15.58 111.068 16.084C111.296 16.576 111.614 16.954 112.022 17.218C112.43 17.482 112.91 17.614 113.462 17.614C113.93 17.614 114.338 17.53 114.686 17.362C115.034 17.194 115.31 16.96 115.514 16.66C115.73 16.348 115.862 15.994 115.91 15.598H117.71C117.662 16.318 117.452 16.948 117.08 17.488C116.708 18.016 116.21 18.43 115.586 18.73C114.962 19.018 114.254 19.162 113.462 19.162ZM119.591 19V9.478H121.445V19H119.591ZM119.591 8.02V5.878H121.445V8.02H119.591ZM127.261 19.162C126.685 19.162 126.157 19.054 125.677 18.838C125.209 18.622 124.801 18.31 124.453 17.902C124.105 17.482 123.835 16.966 123.643 16.354C123.463 15.742 123.373 15.034 123.373 14.23C123.373 13.174 123.535 12.28 123.859 11.548C124.195 10.816 124.651 10.264 125.227 9.892C125.815 9.508 126.493 9.316 127.261 9.316C127.789 9.316 128.269 9.4 128.701 9.568C129.145 9.736 129.517 9.976 129.817 10.288C130.129 10.588 130.357 10.942 130.501 11.35H130.609L130.681 9.478H132.463V19H130.609V17.11H130.501C130.273 17.722 129.877 18.22 129.313 18.604C128.749 18.976 128.065 19.162 127.261 19.162ZM127.909 17.632C128.497 17.632 128.989 17.494 129.385 17.218C129.781 16.942 130.081 16.588 130.285 16.156C130.489 15.724 130.591 15.262 130.591 14.77V13.69C130.591 13.198 130.489 12.736 130.285 12.304C130.081 11.872 129.781 11.518 129.385 11.242C128.989 10.966 128.497 10.828 127.909 10.828C127.381 10.828 126.919 10.96 126.523 11.224C126.127 11.476 125.821 11.854 125.605 12.358C125.389 12.85 125.281 13.474 125.281 14.23C125.281 14.974 125.389 15.598 125.605 16.102C125.821 16.606 126.127 16.99 126.523 17.254C126.919 17.506 127.381 17.632 127.909 17.632ZM135.06 19V5.878H136.914V19H135.06ZM143.803 19V5.878H149.113C149.809 5.878 150.439 5.974 151.003 6.166C151.567 6.346 152.047 6.616 152.443 6.976C152.851 7.324 153.157 7.756 153.361 8.272C153.577 8.788 153.685 9.382 153.685 10.054C153.685 10.894 153.499 11.632 153.127 12.268C152.767 12.892 152.245 13.378 151.561 13.726C150.877 14.062 150.055 14.23 149.095 14.23H145.549V12.664H148.807C149.371 12.664 149.869 12.574 150.301 12.394C150.733 12.214 151.069 11.932 151.309 11.548C151.561 11.164 151.687 10.684 151.687 10.108C151.687 9.52 151.561 9.04 151.309 8.668C151.069 8.296 150.733 8.02 150.301 7.84C149.869 7.66 149.371 7.57 148.807 7.57H145.459L145.765 7.264V19H143.803ZM155.468 19V9.478H157.124L157.214 11.17H157.304C157.508 10.558 157.862 10.102 158.366 9.802C158.87 9.502 159.434 9.352 160.058 9.352C160.166 9.352 160.262 9.358 160.346 9.37C160.442 9.37 160.532 9.376 160.616 9.388V11.134C160.544 11.122 160.454 11.116 160.346 11.116C160.25 11.116 160.148 11.116 160.04 11.116C159.476 11.116 158.996 11.212 158.6 11.404C158.204 11.596 157.898 11.878 157.682 12.25C157.466 12.61 157.34 13.048 157.304 13.564V19H155.468ZM165.951 19.162C165.255 19.162 164.619 19.048 164.043 18.82C163.479 18.592 162.993 18.262 162.585 17.83C162.177 17.398 161.859 16.882 161.631 16.282C161.403 15.682 161.289 15.01 161.289 14.266C161.289 13.282 161.475 12.424 161.847 11.692C162.231 10.948 162.771 10.372 163.467 9.964C164.175 9.544 165.003 9.334 165.951 9.334C166.647 9.334 167.277 9.448 167.841 9.676C168.417 9.892 168.909 10.216 169.317 10.648C169.725 11.08 170.037 11.602 170.253 12.214C170.481 12.814 170.595 13.492 170.595 14.248C170.595 15.22 170.409 16.078 170.037 16.822C169.665 17.554 169.131 18.13 168.435 18.55C167.739 18.958 166.911 19.162 165.951 19.162ZM165.951 17.614C166.503 17.614 166.983 17.488 167.391 17.236C167.811 16.972 168.135 16.588 168.363 16.084C168.591 15.58 168.705 14.968 168.705 14.248C168.705 13.708 168.639 13.234 168.507 12.826C168.387 12.406 168.207 12.052 167.967 11.764C167.727 11.464 167.439 11.242 167.103 11.098C166.767 10.942 166.383 10.864 165.951 10.864C165.399 10.864 164.913 10.996 164.493 11.26C164.085 11.524 163.761 11.908 163.521 12.412C163.293 12.904 163.179 13.522 163.179 14.266C163.179 14.794 163.239 15.268 163.359 15.688C163.491 16.096 163.677 16.444 163.917 16.732C164.169 17.02 164.463 17.242 164.799 17.398C165.147 17.542 165.531 17.614 165.951 17.614ZM172.536 19V9.478H174.3L174.372 11.368H174.48C174.744 10.696 175.158 10.192 175.722 9.856C176.298 9.508 176.934 9.334 177.63 9.334C178.326 9.334 178.95 9.502 179.502 9.838C180.066 10.174 180.468 10.75 180.708 11.566H180.852C181.116 10.822 181.548 10.264 182.148 9.892C182.76 9.52 183.444 9.334 184.2 9.334C184.824 9.334 185.382 9.466 185.874 9.73C186.378 9.994 186.774 10.42 187.062 11.008C187.35 11.596 187.494 12.376 187.494 13.348V19H185.658V13.726C185.658 13.078 185.58 12.544 185.424 12.124C185.268 11.692 185.034 11.374 184.722 11.17C184.41 10.966 184.002 10.864 183.498 10.864C182.982 10.864 182.532 10.996 182.148 11.26C181.764 11.524 181.464 11.878 181.248 12.322C181.044 12.754 180.942 13.246 180.942 13.798V19H179.088V13.726C179.088 13.078 179.01 12.544 178.854 12.124C178.698 11.692 178.464 11.374 178.152 11.17C177.84 10.966 177.438 10.864 176.946 10.864C176.418 10.864 175.962 10.996 175.578 11.26C175.194 11.524 174.894 11.878 174.678 12.322C174.474 12.754 174.372 13.246 174.372 13.798V19H172.536ZM194.005 19.162C193.309 19.162 192.673 19.048 192.097 18.82C191.533 18.592 191.047 18.262 190.639 17.83C190.231 17.398 189.913 16.882 189.685 16.282C189.457 15.682 189.343 15.01 189.343 14.266C189.343 13.282 189.529 12.424 189.901 11.692C190.285 10.948 190.825 10.372 191.521 9.964C192.229 9.544 193.057 9.334 194.005 9.334C194.701 9.334 195.331 9.448 195.895 9.676C196.471 9.892 196.963 10.216 197.371 10.648C197.779 11.08 198.091 11.602 198.307 12.214C198.535 12.814 198.649 13.492 198.649 14.248C198.649 15.22 198.463 16.078 198.091 16.822C197.719 17.554 197.185 18.13 196.489 18.55C195.793 18.958 194.965 19.162 194.005 19.162ZM194.005 17.614C194.557 17.614 195.037 17.488 195.445 17.236C195.865 16.972 196.189 16.588 196.417 16.084C196.645 15.58 196.759 14.968 196.759 14.248C196.759 13.708 196.693 13.234 196.561 12.826C196.441 12.406 196.261 12.052 196.021 11.764C195.781 11.464 195.493 11.242 195.157 11.098C194.821 10.942 194.437 10.864 194.005 10.864C193.453 10.864 192.967 10.996 192.547 11.26C192.139 11.524 191.815 11.908 191.575 12.412C191.347 12.904 191.233 13.522 191.233 14.266C191.233 14.794 191.293 15.268 191.413 15.688C191.545 16.096 191.731 16.444 191.971 16.732C192.223 17.02 192.517 17.242 192.853 17.398C193.201 17.542 193.585 17.614 194.005 17.614ZM203.921 19.18C203.093 19.18 202.379 19.048 201.779 18.784C201.179 18.52 200.717 18.154 200.393 17.686C200.081 17.206 199.925 16.648 199.925 16.012H201.761C201.761 16.636 201.965 17.098 202.373 17.398C202.781 17.686 203.309 17.83 203.957 17.83C204.617 17.83 205.115 17.71 205.451 17.47C205.799 17.218 205.973 16.87 205.973 16.426C205.973 16.09 205.895 15.832 205.739 15.652C205.583 15.46 205.343 15.31 205.019 15.202C204.707 15.094 204.287 15.004 203.759 14.932C202.955 14.812 202.289 14.656 201.761 14.464C201.233 14.26 200.837 13.978 200.573 13.618C200.309 13.246 200.177 12.766 200.177 12.178C200.177 11.602 200.333 11.104 200.645 10.684C200.969 10.252 201.413 9.916 201.977 9.676C202.541 9.424 203.195 9.298 203.939 9.298C204.707 9.298 205.367 9.424 205.919 9.676C206.471 9.928 206.897 10.276 207.197 10.72C207.497 11.164 207.653 11.686 207.665 12.286H205.847C205.835 11.902 205.745 11.596 205.577 11.368C205.421 11.128 205.199 10.954 204.911 10.846C204.635 10.726 204.299 10.666 203.903 10.666C203.315 10.666 202.853 10.786 202.517 11.026C202.193 11.266 202.031 11.59 202.031 11.998C202.031 12.31 202.115 12.562 202.283 12.754C202.451 12.934 202.709 13.078 203.057 13.186C203.417 13.282 203.873 13.372 204.425 13.456C204.977 13.528 205.463 13.63 205.883 13.762C206.315 13.882 206.675 14.05 206.963 14.266C207.263 14.482 207.485 14.752 207.629 15.076C207.773 15.4 207.845 15.796 207.845 16.264C207.845 17.2 207.485 17.92 206.765 18.424C206.045 18.928 205.097 19.18 203.921 19.18Z" fill="#FF7500"/>
<path d="M60 18L66 12L60 6" stroke="#FF7500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            <h2 className="font-mono-sans text-sm 2xl:text-xl pb-2 font-light italic leading-relaxed text-center 2xl:text-left">
            <span className="text-orange-500 font-bold">Special Offer - 50% Off HostBuddy Template</span>
          </h2>
          <h1 className="font-mono-sans font-medium text-[61px] leading-[84px] text-left 2xl:text-left ">Our Current Deals<span className='text-red-500'>*</span></h1>

</div>
          <p className="font-mono-sans text-[18px] 2xl:text-[22px] font-light leading-loose text-left 2xl:text-left text-[#EBEBEB]">
          Check our amazing deals that give you huge savings across our product range from Domains & SSL Certificates to Cloud Servers & Hosting Plans. Find the deal that's right for you from our selection below.</p>
          <div className="flex flex-row justify-start 2xl:justify-start !mt-10 ">
         
          </div>
       
        </div>

        
      </div>
    </div>
  </section>
      );
    };
export default HeroHosting;
