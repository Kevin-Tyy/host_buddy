import Image from 'next/image';
import React from 'react';

const HeroHosting = () => {
  return (
    <section className="h-full min-h-[100vh] 2xl:min-h-[10vh] overflow-hidden relative bg-black flex items-center justify-center">
    <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
   
    <div className="max-w-[1300px] mx-auto text-white  px-10 pt-0">
      <div className="h-full flex items-center relative !z-[2] flex-col 2xl:flex-row justify-center gap-0">
        
        <div className="animate-slide-from-left relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-0 2xl:space-y-2">
          <div className='relative w-full flex flex-col justify-start items-start 2xl:justify-start space-y-0'>
          <svg  className="absolute -top-40 2xl:-top-20 2xl:flex hidden" width="222" height="24" viewBox="0 0 222 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.674 17V3.878H2.204V9.926L1.952 9.674H10.394L10.142 9.926V3.878H11.672V17H10.142V10.772L10.394 11.024H1.952L2.204 10.772V17H0.674ZM18.6353 17.162C17.9513 17.162 17.3273 17.048 16.7633 16.82C16.2113 16.592 15.7313 16.262 15.3233 15.83C14.9273 15.398 14.6153 14.888 14.3873 14.3C14.1713 13.7 14.0633 13.034 14.0633 12.302C14.0633 11.33 14.2493 10.478 14.6213 9.746C14.9933 9.014 15.5213 8.444 16.2053 8.036C16.9013 7.616 17.7113 7.406 18.6353 7.406C19.3193 7.406 19.9373 7.52 20.4893 7.748C21.0533 7.964 21.5333 8.288 21.9293 8.72C22.3253 9.152 22.6313 9.668 22.8473 10.268C23.0633 10.868 23.1713 11.54 23.1713 12.284C23.1713 13.244 22.9853 14.09 22.6133 14.822C22.2533 15.554 21.7313 16.13 21.0473 16.55C20.3633 16.958 19.5593 17.162 18.6353 17.162ZM18.6353 15.902C19.2473 15.902 19.7813 15.764 20.2373 15.488C20.6933 15.2 21.0473 14.786 21.2993 14.246C21.5633 13.694 21.6953 13.04 21.6953 12.284C21.6953 11.72 21.6233 11.216 21.4793 10.772C21.3353 10.316 21.1313 9.932 20.8673 9.62C20.6033 9.296 20.2853 9.05 19.9133 8.882C19.5413 8.714 19.1153 8.63 18.6353 8.63C18.0233 8.63 17.4833 8.78 17.0153 9.08C16.5593 9.368 16.1993 9.782 15.9353 10.322C15.6833 10.862 15.5573 11.522 15.5573 12.302C15.5573 12.854 15.6233 13.358 15.7553 13.814C15.8993 14.258 16.1033 14.636 16.3673 14.948C16.6433 15.26 16.9733 15.5 17.3573 15.668C17.7413 15.824 18.1673 15.902 18.6353 15.902ZM25.241 17V7.55H26.627L26.681 9.512H26.789C27.065 8.816 27.497 8.294 28.085 7.946C28.673 7.586 29.321 7.406 30.029 7.406C30.749 7.406 31.385 7.58 31.937 7.928C32.489 8.276 32.885 8.858 33.125 9.674H33.269C33.545 8.918 33.989 8.354 34.601 7.982C35.225 7.598 35.921 7.406 36.689 7.406C37.325 7.406 37.889 7.538 38.381 7.802C38.885 8.066 39.281 8.498 39.569 9.098C39.857 9.686 40.001 10.466 40.001 11.438V17H38.561V11.726C38.561 11.018 38.471 10.436 38.291 9.98C38.123 9.524 37.865 9.188 37.517 8.972C37.181 8.744 36.737 8.63 36.185 8.63C35.621 8.63 35.123 8.774 34.691 9.062C34.271 9.35 33.941 9.74 33.701 10.232C33.473 10.712 33.359 11.264 33.359 11.888V17H31.883V11.726C31.883 11.018 31.799 10.436 31.631 9.98C31.463 9.524 31.205 9.188 30.857 8.972C30.521 8.744 30.083 8.63 29.543 8.63C28.967 8.63 28.463 8.774 28.031 9.062C27.611 9.35 27.281 9.74 27.041 10.232C26.801 10.712 26.681 11.264 26.681 11.888V17H25.241ZM46.2614 17.162C45.3614 17.162 44.5874 16.964 43.9394 16.568C43.3034 16.172 42.8174 15.608 42.4814 14.876C42.1454 14.144 41.9774 13.292 41.9774 12.32C41.9774 11.324 42.1454 10.46 42.4814 9.728C42.8174 8.984 43.2974 8.414 43.9214 8.018C44.5454 7.61 45.3074 7.406 46.2074 7.406C47.1674 7.406 47.9594 7.622 48.5834 8.054C49.2074 8.486 49.6574 9.086 49.9334 9.854C50.2214 10.622 50.3294 11.51 50.2574 12.518H43.3994C43.4114 13.298 43.5314 13.952 43.7594 14.48C43.9994 14.996 44.3294 15.386 44.7494 15.65C45.1814 15.902 45.6854 16.028 46.2614 16.028C46.9574 16.028 47.5274 15.854 47.9714 15.506C48.4154 15.158 48.6974 14.702 48.8174 14.138H50.2034C50.1314 14.774 49.9094 15.32 49.5374 15.776C49.1774 16.232 48.7094 16.58 48.1334 16.82C47.5694 17.048 46.9454 17.162 46.2614 17.162ZM43.4174 11.69L43.2554 11.474H48.9974L48.8354 11.726C48.8474 10.97 48.7454 10.364 48.5294 9.908C48.3134 9.44 48.0014 9.098 47.5934 8.882C47.1974 8.654 46.7354 8.54 46.2074 8.54C45.6554 8.54 45.1754 8.66 44.7674 8.9C44.3594 9.14 44.0354 9.494 43.7954 9.962C43.5674 10.418 43.4414 10.994 43.4174 11.69Z" fill="white"/>
<path d="M76.584 19V5.878H82.668C83.52 5.878 84.24 6.022 84.828 6.31C85.416 6.586 85.86 6.976 86.16 7.48C86.46 7.972 86.61 8.56 86.61 9.244C86.61 9.712 86.532 10.144 86.376 10.54C86.22 10.924 85.986 11.26 85.674 11.548C85.362 11.836 84.972 12.04 84.504 12.16V12.25C85.044 12.358 85.494 12.556 85.854 12.844C86.214 13.132 86.484 13.492 86.664 13.924C86.856 14.344 86.952 14.806 86.952 15.31C86.952 16.102 86.772 16.774 86.412 17.326C86.052 17.866 85.536 18.28 84.864 18.568C84.192 18.856 83.382 19 82.434 19H76.584ZM78.51 17.452H82.254C83.166 17.452 83.844 17.242 84.288 16.822C84.732 16.402 84.954 15.862 84.954 15.202C84.954 14.494 84.732 13.954 84.288 13.582C83.844 13.21 83.232 13.024 82.452 13.024H78.51V17.452ZM78.51 11.53H82.362C82.878 11.53 83.304 11.446 83.64 11.278C83.976 11.11 84.228 10.876 84.396 10.576C84.564 10.264 84.648 9.91 84.648 9.514C84.648 8.83 84.42 8.314 83.964 7.966C83.52 7.606 82.932 7.426 82.2 7.426H78.51V11.53ZM88.9874 19V5.878H90.8414V19H88.9874ZM96.6571 19.162C96.0811 19.162 95.5531 19.054 95.0731 18.838C94.6051 18.622 94.1971 18.31 93.8491 17.902C93.5011 17.482 93.2311 16.966 93.0391 16.354C92.8591 15.742 92.7691 15.034 92.7691 14.23C92.7691 13.174 92.9311 12.28 93.2551 11.548C93.5911 10.816 94.0471 10.264 94.6231 9.892C95.2111 9.508 95.8891 9.316 96.6571 9.316C97.1851 9.316 97.6651 9.4 98.0971 9.568C98.5411 9.736 98.9131 9.976 99.2131 10.288C99.5251 10.588 99.7531 10.942 99.8971 11.35H100.005L100.077 9.478H101.859V19H100.005V17.11H99.8971C99.6691 17.722 99.2731 18.22 98.7091 18.604C98.1451 18.976 97.4611 19.162 96.6571 19.162ZM97.3051 17.632C97.8931 17.632 98.3851 17.494 98.7811 17.218C99.1771 16.942 99.4771 16.588 99.6811 16.156C99.8851 15.724 99.9871 15.262 99.9871 14.77V13.69C99.9871 13.198 99.8851 12.736 99.6811 12.304C99.4771 11.872 99.1771 11.518 98.7811 11.242C98.3851 10.966 97.8931 10.828 97.3051 10.828C96.7771 10.828 96.3151 10.96 95.9191 11.224C95.5231 11.476 95.2171 11.854 95.0011 12.358C94.7851 12.85 94.6771 13.474 94.6771 14.23C94.6771 14.974 94.7851 15.598 95.0011 16.102C95.2171 16.606 95.5231 16.99 95.9191 17.254C96.3151 17.506 96.7771 17.632 97.3051 17.632ZM108.364 19.162C107.668 19.162 107.032 19.048 106.456 18.82C105.892 18.58 105.406 18.244 104.998 17.812C104.602 17.38 104.29 16.864 104.062 16.264C103.846 15.664 103.738 14.992 103.738 14.248C103.738 13.264 103.93 12.406 104.314 11.674C104.698 10.93 105.244 10.354 105.952 9.946C106.66 9.538 107.488 9.334 108.436 9.334C109.204 9.334 109.888 9.478 110.488 9.766C111.1 10.054 111.586 10.456 111.946 10.972C112.318 11.488 112.528 12.088 112.576 12.772H110.776C110.704 12.352 110.554 12.004 110.326 11.728C110.098 11.452 109.816 11.242 109.48 11.098C109.156 10.954 108.79 10.882 108.382 10.882C107.794 10.882 107.296 11.026 106.888 11.314C106.48 11.59 106.168 11.98 105.952 12.484C105.736 12.988 105.628 13.582 105.628 14.266C105.628 14.974 105.742 15.58 105.97 16.084C106.198 16.576 106.516 16.954 106.924 17.218C107.332 17.482 107.812 17.614 108.364 17.614C108.832 17.614 109.24 17.53 109.588 17.362C109.936 17.194 110.212 16.96 110.416 16.66C110.632 16.348 110.764 15.994 110.812 15.598H112.612C112.564 16.318 112.354 16.948 111.982 17.488C111.61 18.016 111.112 18.43 110.488 18.73C109.864 19.018 109.156 19.162 108.364 19.162ZM114.493 19V5.878H116.365V14.032L117.193 13.132L120.739 9.478H123.043L119.353 13.186L123.187 19H121.009L118.633 15.4L118.057 14.446L116.365 16.084V19H114.493ZM129.318 19V5.878H138.48V7.57H130.92L131.28 7.21V12.142L130.92 11.782H137.76V13.402H130.92L131.28 13.042V19H129.318ZM140.298 19V9.478H141.954L142.044 11.17H142.134C142.338 10.558 142.692 10.102 143.196 9.802C143.7 9.502 144.264 9.352 144.888 9.352C144.996 9.352 145.092 9.358 145.176 9.37C145.272 9.37 145.362 9.376 145.446 9.388V11.134C145.374 11.122 145.284 11.116 145.176 11.116C145.08 11.116 144.978 11.116 144.87 11.116C144.306 11.116 143.826 11.212 143.43 11.404C143.034 11.596 142.728 11.878 142.512 12.25C142.296 12.61 142.17 13.048 142.134 13.564V19H140.298ZM147.066 19V9.478H148.92V19H147.066ZM147.066 8.02V5.878H148.92V8.02H147.066ZM154.735 19.162C154.159 19.162 153.631 19.054 153.151 18.838C152.683 18.622 152.275 18.31 151.927 17.902C151.579 17.482 151.309 16.966 151.117 16.354C150.937 15.742 150.847 15.034 150.847 14.23C150.847 13.174 151.009 12.28 151.333 11.548C151.669 10.816 152.125 10.264 152.701 9.892C153.289 9.508 153.967 9.316 154.735 9.316C155.263 9.316 155.743 9.4 156.175 9.568C156.619 9.736 156.991 9.976 157.291 10.288C157.603 10.588 157.831 10.942 157.975 11.35H158.083V5.878H159.937V19H158.155L158.083 17.11H157.975C157.747 17.722 157.351 18.22 156.787 18.604C156.223 18.976 155.539 19.162 154.735 19.162ZM155.383 17.632C155.971 17.632 156.463 17.494 156.859 17.218C157.255 16.942 157.555 16.588 157.759 16.156C157.963 15.724 158.065 15.262 158.065 14.77V13.69C158.065 13.33 158.005 12.982 157.885 12.646C157.777 12.298 157.609 11.992 157.381 11.728C157.165 11.452 156.889 11.236 156.553 11.08C156.217 10.912 155.827 10.828 155.383 10.828C154.855 10.828 154.393 10.96 153.997 11.224C153.601 11.476 153.295 11.854 153.079 12.358C152.863 12.85 152.755 13.474 152.755 14.23C152.755 14.974 152.863 15.598 153.079 16.102C153.295 16.606 153.601 16.99 153.997 17.254C154.393 17.506 154.855 17.632 155.383 17.632ZM165.774 19.162C165.198 19.162 164.67 19.054 164.19 18.838C163.722 18.622 163.314 18.31 162.966 17.902C162.618 17.482 162.348 16.966 162.156 16.354C161.976 15.742 161.886 15.034 161.886 14.23C161.886 13.174 162.048 12.28 162.372 11.548C162.708 10.816 163.164 10.264 163.74 9.892C164.328 9.508 165.006 9.316 165.774 9.316C166.302 9.316 166.782 9.4 167.214 9.568C167.658 9.736 168.03 9.976 168.33 10.288C168.642 10.588 168.87 10.942 169.014 11.35H169.122L169.194 9.478H170.976V19H169.122V17.11H169.014C168.786 17.722 168.39 18.22 167.826 18.604C167.262 18.976 166.578 19.162 165.774 19.162ZM166.422 17.632C167.01 17.632 167.502 17.494 167.898 17.218C168.294 16.942 168.594 16.588 168.798 16.156C169.002 15.724 169.104 15.262 169.104 14.77V13.69C169.104 13.198 169.002 12.736 168.798 12.304C168.594 11.872 168.294 11.518 167.898 11.242C167.502 10.966 167.01 10.828 166.422 10.828C165.894 10.828 165.432 10.96 165.036 11.224C164.64 11.476 164.334 11.854 164.118 12.358C163.902 12.85 163.794 13.474 163.794 14.23C163.794 14.974 163.902 15.598 164.118 16.102C164.334 16.606 164.64 16.99 165.036 17.254C165.432 17.506 165.894 17.632 166.422 17.632ZM172.943 22.006V20.476H173.969C174.245 20.476 174.479 20.434 174.671 20.35C174.875 20.278 175.049 20.158 175.193 19.99C175.337 19.834 175.457 19.63 175.553 19.378L176.129 17.902V18.712L172.223 9.478H174.257L176.435 15.274L176.831 16.408H176.903L177.281 15.274L179.333 9.478H181.295L177.335 19.828C177.131 20.368 176.885 20.794 176.597 21.106C176.321 21.43 175.991 21.658 175.607 21.79C175.223 21.934 174.779 22.006 174.275 22.006H172.943ZM191.244 19.162C190.08 19.162 189.114 18.982 188.346 18.622C187.578 18.262 187.002 17.764 186.618 17.128C186.234 16.48 186.036 15.736 186.024 14.896H188.04C188.052 15.448 188.172 15.934 188.4 16.354C188.64 16.762 188.994 17.074 189.462 17.29C189.93 17.506 190.536 17.614 191.28 17.614C192.204 17.614 192.942 17.446 193.494 17.11C194.058 16.774 194.34 16.258 194.34 15.562C194.34 15.166 194.28 14.836 194.16 14.572C194.04 14.308 193.842 14.092 193.566 13.924C193.302 13.744 192.948 13.594 192.504 13.474C192.06 13.354 191.52 13.24 190.884 13.132C190.128 13 189.462 12.844 188.886 12.664C188.322 12.472 187.848 12.238 187.464 11.962C187.092 11.674 186.81 11.326 186.618 10.918C186.426 10.51 186.33 10.03 186.33 9.478C186.33 8.71 186.522 8.044 186.906 7.48C187.29 6.916 187.842 6.484 188.562 6.184C189.282 5.884 190.146 5.734 191.154 5.734C192.162 5.734 193.02 5.896 193.728 6.22C194.436 6.532 194.982 6.976 195.366 7.552C195.75 8.116 195.948 8.788 195.96 9.568H193.962C193.95 9.04 193.818 8.608 193.566 8.272C193.326 7.924 192.99 7.666 192.558 7.498C192.138 7.33 191.646 7.246 191.082 7.246C190.506 7.246 190.014 7.33 189.606 7.498C189.21 7.654 188.904 7.882 188.688 8.182C188.472 8.47 188.364 8.812 188.364 9.208C188.364 9.688 188.478 10.06 188.706 10.324C188.946 10.588 189.324 10.798 189.84 10.954C190.356 11.098 191.034 11.248 191.874 11.404C192.462 11.488 193.02 11.608 193.548 11.764C194.088 11.92 194.568 12.136 194.988 12.412C195.42 12.688 195.756 13.066 195.996 13.546C196.248 14.014 196.374 14.626 196.374 15.382C196.374 16.126 196.176 16.786 195.78 17.362C195.396 17.926 194.82 18.37 194.052 18.694C193.296 19.006 192.36 19.162 191.244 19.162ZM201.704 19.162C201.128 19.162 200.6 19.054 200.12 18.838C199.652 18.622 199.244 18.31 198.896 17.902C198.548 17.482 198.278 16.966 198.086 16.354C197.906 15.742 197.816 15.034 197.816 14.23C197.816 13.174 197.978 12.28 198.302 11.548C198.638 10.816 199.094 10.264 199.67 9.892C200.258 9.508 200.936 9.316 201.704 9.316C202.232 9.316 202.712 9.4 203.144 9.568C203.588 9.736 203.96 9.976 204.26 10.288C204.572 10.588 204.8 10.942 204.944 11.35H205.052L205.124 9.478H206.906V19H205.052V17.11H204.944C204.716 17.722 204.32 18.22 203.756 18.604C203.192 18.976 202.508 19.162 201.704 19.162ZM202.352 17.632C202.94 17.632 203.432 17.494 203.828 17.218C204.224 16.942 204.524 16.588 204.728 16.156C204.932 15.724 205.034 15.262 205.034 14.77V13.69C205.034 13.198 204.932 12.736 204.728 12.304C204.524 11.872 204.224 11.518 203.828 11.242C203.432 10.966 202.94 10.828 202.352 10.828C201.824 10.828 201.362 10.96 200.966 11.224C200.57 11.476 200.264 11.854 200.048 12.358C199.832 12.85 199.724 13.474 199.724 14.23C199.724 14.974 199.832 15.598 200.048 16.102C200.264 16.606 200.57 16.99 200.966 17.254C201.362 17.506 201.824 17.632 202.352 17.632ZM209.503 19V5.878H211.357V19H209.503ZM217.713 19.162C216.789 19.162 215.991 18.964 215.319 18.568C214.659 18.16 214.155 17.59 213.807 16.858C213.459 16.126 213.285 15.268 213.285 14.284C213.285 13.276 213.459 12.4 213.807 11.656C214.155 10.912 214.653 10.342 215.301 9.946C215.961 9.538 216.747 9.334 217.659 9.334C218.655 9.334 219.477 9.562 220.125 10.018C220.785 10.462 221.259 11.08 221.547 11.872C221.835 12.664 221.943 13.576 221.871 14.608H215.103C215.115 15.304 215.229 15.886 215.445 16.354C215.661 16.81 215.961 17.158 216.345 17.398C216.741 17.626 217.197 17.74 217.713 17.74C218.349 17.74 218.871 17.59 219.279 17.29C219.687 16.978 219.945 16.576 220.053 16.084H221.817C221.733 16.72 221.505 17.272 221.133 17.74C220.761 18.196 220.281 18.55 219.693 18.802C219.105 19.042 218.445 19.162 217.713 19.162ZM215.121 13.582L214.941 13.348H220.233L220.053 13.6C220.065 12.94 219.969 12.4 219.765 11.98C219.573 11.56 219.291 11.254 218.919 11.062C218.559 10.858 218.139 10.756 217.659 10.756C217.155 10.756 216.717 10.864 216.345 11.08C215.973 11.296 215.679 11.614 215.463 12.034C215.247 12.454 215.133 12.97 215.121 13.582Z" fill="#FF7500"/>
<path d="M60 18L66 12L60 6" stroke="#FF7500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



            <h2 className="font-mono-sans text-sm 2xl:text-xl pb-2 font-light italic leading-relaxed text-center 2xl:text-left">
            <span className="text-orange-500 font-bold">Sales</span>
          </h2>
          <h1 className="font-mono-sans font-medium text-[40px] 2xl:text-[61px] leading-[44px] 2xl:leading-[84px] text-left 2xl:text-left ">Black Friday Sale</h1>

</div>
          <p className="font-mono-sans text-[12px] 2xl:text-[15px] font-light leading-loose text-left 2xl:text-left text-[#EBEBEB]">
          Lorem ipsum dolor sit amet consectetur. Tempus integer id orci faucibus. Sed pharetra egestas magna eu fringilla. Tortor id pellentesque arcu vestibulum sed sapien.</p>
        
       
        </div>
        <div className="animate-slide-from-right w-full  item-center justify-center">
          <Image src="/3.gif" alt="" width={500} height={500} className="item-center justify-center mx-auto 2xl:w-[600px]" />
        </div>
        
      </div>
    </div>
  </section>
      );
    };
export default HeroHosting;
