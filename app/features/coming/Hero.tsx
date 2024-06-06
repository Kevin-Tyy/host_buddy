"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import FooterBox from './FooterBox';
import { CiTwitter } from 'react-icons/ci';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { RiLinkedinLine } from 'react-icons/ri';

const Login = () => {


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] ">
      <div className="bg-white  rounded-3xl px-20   py-10    shadow-md w-full max-w-xl space-y-10  absolute z-[2] items-center justify-center flex flex-col">
      <div className="mx-auto ">
          <Image src="/coming.gif" width={200} height={200} className="w-44" alt="404" />
        </div>
    <div className='flex flex-col space-y-4'>    <h2 className="text-xl font-bold text-center">WE ARE COMING SOON!</h2>
        <p className="text-[14px] text-[#817F9B] font-thin px-4 text-center">We’re currently working on creating something fantastic.
We’ll be here soon. subscribe to be notified.</p>
</div>
<svg  viewBox="0 0 509 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="74" rx="4" fill="#FF7500"/>
<path d="M24.9126 54.4773C22.3672 54.4773 20.1001 54.0398 18.1115 53.1648C16.1342 52.2784 14.5717 51.0625 13.424 49.517C12.2876 47.9602 11.7024 46.1648 11.6683 44.1307H19.1001C19.1456 44.983 19.424 45.733 19.9354 46.3807C20.4581 47.017 21.1513 47.5114 22.0149 47.8636C22.8786 48.2159 23.8501 48.392 24.9297 48.392C26.0547 48.392 27.049 48.1932 27.9126 47.7955C28.7763 47.3977 29.4524 46.8466 29.9411 46.142C30.4297 45.4375 30.674 44.625 30.674 43.7045C30.674 42.7727 30.4126 41.9489 29.8899 41.233C29.3786 40.5057 28.6399 39.9375 27.674 39.5284C26.7195 39.1193 25.5831 38.9148 24.2649 38.9148H21.0092V33.4943H24.2649C25.3786 33.4943 26.3615 33.3011 27.2138 32.9148C28.0774 32.5284 28.7479 31.9943 29.2251 31.3125C29.7024 30.6193 29.9411 29.8125 29.9411 28.892C29.9411 28.017 29.7308 27.25 29.3104 26.5909C28.9013 25.9205 28.3217 25.3977 27.5717 25.0227C26.8331 24.6477 25.9695 24.4602 24.9808 24.4602C23.9808 24.4602 23.0661 24.642 22.2365 25.0057C21.407 25.358 20.7422 25.8636 20.2422 26.5227C19.7422 27.1818 19.4751 27.9545 19.4411 28.8409H12.3672C12.4013 26.8295 12.9751 25.0568 14.0888 23.5227C15.2024 21.9886 16.7024 20.7898 18.5888 19.9261C20.4865 19.0511 22.6286 18.6136 25.0149 18.6136C27.424 18.6136 29.532 19.0511 31.3388 19.9261C33.1456 20.8011 34.549 21.983 35.549 23.4716C36.5604 24.9489 37.0604 26.608 37.049 28.4489C37.0604 30.4034 36.4524 32.0341 35.2251 33.3409C34.0092 34.6477 32.424 35.4773 30.4695 35.8295V36.1023C33.0376 36.4318 34.9922 37.3239 36.3331 38.7784C37.6854 40.2216 38.3558 42.0284 38.3445 44.1989C38.3558 46.1875 37.782 47.9545 36.6229 49.5C35.4751 51.0455 33.8899 52.2614 31.8672 53.1477C29.8445 54.0341 27.5263 54.4773 24.9126 54.4773Z" fill="white"/>
<rect x="55" width="50" height="74" rx="4" fill="#FF7500"/>
<path d="M79.9936 54.767C77.0618 54.7557 74.5391 54.0341 72.4254 52.6023C70.3232 51.1705 68.7038 49.0966 67.5675 46.3807C66.4425 43.6648 65.8857 40.3977 65.897 36.5795C65.897 32.7727 66.4595 29.5284 67.5845 26.8466C68.7209 24.1648 70.3402 22.125 72.4425 20.7273C74.5561 19.3182 77.0732 18.6136 79.9936 18.6136C82.9141 18.6136 85.4254 19.3182 87.5277 20.7273C89.6413 22.1364 91.2663 24.1818 92.4027 26.8636C93.5391 29.5341 94.1016 32.7727 94.0902 36.5795C94.0902 40.4091 93.522 43.6818 92.3857 46.3977C91.2607 49.1136 89.647 51.1875 87.5447 52.6193C85.4425 54.0511 82.9254 54.767 79.9936 54.767ZM79.9936 48.6477C81.9936 48.6477 83.5902 47.642 84.7834 45.6307C85.9766 43.6193 86.5675 40.6023 86.5561 36.5795C86.5561 33.9318 86.2834 31.7273 85.7379 29.9659C85.2038 28.2045 84.4425 26.8807 83.4538 25.9943C82.4766 25.108 81.3232 24.6648 79.9936 24.6648C78.005 24.6648 76.4141 25.6591 75.2209 27.6477C74.0277 29.6364 73.4254 32.6136 73.4141 36.5795C73.4141 39.2614 73.6811 41.5 74.2152 43.2955C74.7607 45.0795 75.5277 46.4205 76.5163 47.3182C77.505 48.2045 78.6641 48.6477 79.9936 48.6477Z" fill="white"/>
<path d="M40.1873 96H37.2299V87.2727H40.247C41.1135 87.2727 41.8578 87.4474 42.4799 87.7969C43.1049 88.1435 43.5851 88.642 43.9203 89.2926C44.2555 89.9432 44.4231 90.7216 44.4231 91.6278C44.4231 92.5369 44.2541 93.3182 43.916 93.9716C43.5808 94.625 43.0964 95.1264 42.4629 95.4759C41.8322 95.8253 41.0737 96 40.1873 96ZM38.8109 94.6321H40.1106C40.7186 94.6321 41.2257 94.5213 41.6319 94.2997C42.0382 94.0753 42.3436 93.7415 42.5481 93.2983C42.7527 92.8523 42.8549 92.2955 42.8549 91.6278C42.8549 90.9602 42.7527 90.4062 42.5481 89.9659C42.3436 89.5227 42.041 89.1918 41.6404 88.973C41.2427 88.7514 40.7484 88.6406 40.1575 88.6406H38.8109V94.6321ZM46.5772 96H44.8897L47.9622 87.2727H49.9139L52.9906 96H51.3031L48.9721 89.0625H48.9039L46.5772 96ZM46.6326 92.5781H51.2349V93.848H46.6326V92.5781ZM52.6529 87.2727H54.4384L56.5733 91.1335H56.6586L58.7935 87.2727H60.579L57.4043 92.7443V96H55.8276V92.7443L52.6529 87.2727ZM66.4416 89.6719C66.4018 89.2997 66.2342 89.0099 65.9387 88.8026C65.6461 88.5952 65.2654 88.4915 64.7967 88.4915C64.4672 88.4915 64.1845 88.5412 63.9487 88.6406C63.7129 88.7401 63.5325 88.875 63.4075 89.0455C63.2825 89.2159 63.2186 89.4105 63.2157 89.6293C63.2157 89.8111 63.2569 89.9687 63.3393 90.1023C63.4245 90.2358 63.5396 90.3494 63.6845 90.4432C63.8294 90.5341 63.9899 90.6108 64.166 90.6733C64.3422 90.7358 64.5197 90.7884 64.6987 90.831L65.5169 91.0355C65.8464 91.1122 66.1632 91.2159 66.4672 91.3466C66.774 91.4773 67.0481 91.642 67.2896 91.8409C67.5339 92.0398 67.7271 92.2798 67.8691 92.5611C68.0112 92.8423 68.0822 93.1719 68.0822 93.5497C68.0822 94.0611 67.9515 94.5114 67.6902 94.9006C67.4288 95.2869 67.051 95.5895 66.5566 95.8082C66.0652 96.0241 65.47 96.1321 64.7711 96.1321C64.0922 96.1321 63.5027 96.027 63.0027 95.8168C62.5055 95.6065 62.1163 95.2997 61.835 94.8963C61.5566 94.4929 61.4061 94.0014 61.3833 93.4219H62.9387C62.9615 93.7259 63.0552 93.9787 63.22 94.1804C63.3848 94.3821 63.5993 94.5327 63.8635 94.6321C64.1305 94.7315 64.4288 94.7812 64.7583 94.7812C65.1021 94.7812 65.4032 94.7301 65.6618 94.6278C65.9231 94.5227 66.1277 94.3778 66.2754 94.1932C66.4231 94.0057 66.4984 93.7869 66.5012 93.5369C66.4984 93.3097 66.4316 93.1222 66.301 92.9744C66.1703 92.8239 65.987 92.6989 65.7512 92.5994C65.5183 92.4972 65.2456 92.4062 64.9331 92.3267L63.9402 92.071C63.2214 91.8864 62.6532 91.6065 62.2356 91.2315C61.8208 90.8537 61.6135 90.3523 61.6135 89.7273C61.6135 89.2131 61.7527 88.7628 62.0311 88.3764C62.3123 87.9901 62.6944 87.6903 63.1774 87.4773C63.6603 87.2614 64.2072 87.1534 64.818 87.1534C65.4373 87.1534 65.9799 87.2614 66.4458 87.4773C66.9146 87.6903 67.2825 87.9872 67.5495 88.3679C67.8166 88.7457 67.9544 89.1804 67.9629 89.6719H66.4416Z" fill="#16191C"/>
<rect x="135" width="50" height="74" rx="4" fill="#FF7500"/>
<path d="M159.994 54.767C157.062 54.7557 154.539 54.0341 152.425 52.6023C150.323 51.1705 148.704 49.0966 147.567 46.3807C146.442 43.6648 145.886 40.3977 145.897 36.5795C145.897 32.7727 146.46 29.5284 147.585 26.8466C148.721 24.1648 150.34 22.125 152.442 20.7273C154.556 19.3182 157.073 18.6136 159.994 18.6136C162.914 18.6136 165.425 19.3182 167.528 20.7273C169.641 22.1364 171.266 24.1818 172.403 26.8636C173.539 29.5341 174.102 32.7727 174.09 36.5795C174.09 40.4091 173.522 43.6818 172.386 46.3977C171.261 49.1136 169.647 51.1875 167.545 52.6193C165.442 54.0511 162.925 54.767 159.994 54.767ZM159.994 48.6477C161.994 48.6477 163.59 47.642 164.783 45.6307C165.977 43.6193 166.567 40.6023 166.556 36.5795C166.556 33.9318 166.283 31.7273 165.738 29.9659C165.204 28.2045 164.442 26.8807 163.454 25.9943C162.477 25.108 161.323 24.6648 159.994 24.6648C158.005 24.6648 156.414 25.6591 155.221 27.6477C154.028 29.6364 153.425 32.6136 153.414 36.5795C153.414 39.2614 153.681 41.5 154.215 43.2955C154.761 45.0795 155.528 46.4205 156.516 47.3182C157.505 48.2045 158.664 48.6477 159.994 48.6477Z" fill="white"/>
<rect x="190" width="49" height="74" rx="4" fill="#FF7500"/>
<path d="M214.611 54.4773C212.202 54.4773 210.054 54.0341 208.168 53.1477C206.293 52.2614 204.804 51.0398 203.702 49.483C202.599 47.9261 202.026 46.142 201.98 44.1307H209.139C209.219 45.483 209.787 46.5795 210.844 47.4205C211.901 48.2614 213.156 48.6818 214.611 48.6818C215.77 48.6818 216.793 48.4261 217.679 47.9148C218.577 47.392 219.276 46.6705 219.776 45.75C220.287 44.8182 220.543 43.75 220.543 42.5455C220.543 41.3182 220.281 40.2386 219.759 39.3068C219.247 38.375 218.537 37.6477 217.628 37.125C216.719 36.6023 215.679 36.3352 214.509 36.3239C213.486 36.3239 212.491 36.5341 211.526 36.9545C210.571 37.375 209.827 37.9489 209.293 38.6761L202.73 37.5L204.384 19.0909H225.724V25.125H210.469L209.565 33.8693H209.77C210.384 33.0057 211.31 32.2898 212.548 31.7216C213.787 31.1534 215.173 30.8693 216.707 30.8693C218.81 30.8693 220.685 31.3636 222.332 32.3523C223.98 33.3409 225.281 34.6989 226.236 36.4261C227.19 38.142 227.662 40.1193 227.651 42.358C227.662 44.7102 227.116 46.8011 226.014 48.6307C224.923 50.4489 223.395 51.8807 221.429 52.9261C219.474 53.9602 217.202 54.4773 214.611 54.4773Z" fill="white"/>
<path d="M166.55 96V87.2727H168.131V90.9673H172.175V87.2727H173.76V96H172.175V92.2926H168.131V96H166.55ZM183.278 91.6364C183.278 92.5767 183.102 93.3821 182.75 94.0526C182.4 94.7202 181.923 95.2315 181.318 95.5866C180.716 95.9418 180.032 96.1193 179.268 96.1193C178.504 96.1193 177.819 95.9418 177.214 95.5866C176.612 95.2287 176.135 94.7159 175.782 94.0483C175.433 93.3778 175.258 92.5739 175.258 91.6364C175.258 90.696 175.433 89.892 175.782 89.2244C176.135 88.554 176.612 88.0412 177.214 87.6861C177.819 87.331 178.504 87.1534 179.268 87.1534C180.032 87.1534 180.716 87.331 181.318 87.6861C181.923 88.0412 182.4 88.554 182.75 89.2244C183.102 89.892 183.278 90.696 183.278 91.6364ZM181.689 91.6364C181.689 90.9744 181.585 90.4162 181.378 89.9616C181.173 89.5043 180.889 89.1591 180.525 88.9261C180.162 88.6903 179.743 88.5724 179.268 88.5724C178.794 88.5724 178.375 88.6903 178.011 88.9261C177.648 89.1591 177.362 89.5043 177.155 89.9616C176.95 90.4162 176.848 90.9744 176.848 91.6364C176.848 92.2983 176.95 92.858 177.155 93.3153C177.362 93.7699 177.648 94.1151 178.011 94.3509C178.375 94.5838 178.794 94.7003 179.268 94.7003C179.743 94.7003 180.162 94.5838 180.525 94.3509C180.889 94.1151 181.173 93.7699 181.378 93.3153C181.585 92.858 181.689 92.2983 181.689 91.6364ZM190.274 87.2727H191.855V92.9744C191.855 93.5994 191.708 94.1491 191.412 94.6236C191.119 95.098 190.708 95.4687 190.176 95.7358C189.645 96 189.024 96.1321 188.314 96.1321C187.601 96.1321 186.979 96 186.448 95.7358C185.916 95.4687 185.504 95.098 185.212 94.6236C184.919 94.1491 184.773 93.5994 184.773 92.9744V87.2727H186.354V92.8423C186.354 93.206 186.433 93.5298 186.593 93.8139C186.754 94.098 186.982 94.321 187.274 94.483C187.567 94.642 187.914 94.7216 188.314 94.7216C188.715 94.7216 189.061 94.642 189.354 94.483C189.649 94.321 189.877 94.098 190.036 93.8139C190.195 93.5298 190.274 93.206 190.274 92.8423V87.2727ZM193.574 96V87.2727H196.846C197.517 87.2727 198.079 87.3892 198.534 87.6222C198.991 87.8551 199.336 88.1818 199.569 88.6023C199.805 89.0199 199.923 89.5071 199.923 90.0639C199.923 90.6236 199.804 91.1094 199.565 91.5213C199.329 91.9304 198.981 92.2472 198.521 92.4716C198.061 92.6932 197.496 92.804 196.825 92.804H194.494V91.4915H196.612C197.004 91.4915 197.325 91.4375 197.575 91.3295C197.825 91.2187 198.01 91.0582 198.129 90.848C198.251 90.6349 198.312 90.3736 198.312 90.0639C198.312 89.7543 198.251 89.4901 198.129 89.2713C198.007 89.0497 197.821 88.8821 197.571 88.7685C197.321 88.652 196.998 88.5938 196.604 88.5938H195.155V96H193.574ZM198.082 92.0455L200.243 96H198.479L196.356 92.0455H198.082ZM206.121 89.6719C206.081 89.2997 205.914 89.0099 205.618 88.8026C205.326 88.5952 204.945 88.4915 204.476 88.4915C204.147 88.4915 203.864 88.5412 203.628 88.6406C203.393 88.7401 203.212 88.875 203.087 89.0455C202.962 89.2159 202.898 89.4105 202.895 89.6293C202.895 89.8111 202.937 89.9687 203.019 90.1023C203.104 90.2358 203.219 90.3494 203.364 90.4432C203.509 90.5341 203.67 90.6108 203.846 90.6733C204.022 90.7358 204.199 90.7884 204.378 90.831L205.197 91.0355C205.526 91.1122 205.843 91.2159 206.147 91.3466C206.454 91.4773 206.728 91.642 206.969 91.8409C207.214 92.0398 207.407 92.2798 207.549 92.5611C207.691 92.8423 207.762 93.1719 207.762 93.5497C207.762 94.0611 207.631 94.5114 207.37 94.9006C207.108 95.2869 206.731 95.5895 206.236 95.8082C205.745 96.0241 205.15 96.1321 204.451 96.1321C203.772 96.1321 203.182 96.027 202.682 95.8168C202.185 95.6065 201.796 95.2997 201.515 94.8963C201.236 94.4929 201.086 94.0014 201.063 93.4219H202.618C202.641 93.7259 202.735 93.9787 202.9 94.1804C203.064 94.3821 203.279 94.5327 203.543 94.6321C203.81 94.7315 204.108 94.7812 204.438 94.7812C204.782 94.7812 205.083 94.7301 205.341 94.6278C205.603 94.5227 205.807 94.3778 205.955 94.1932C206.103 94.0057 206.178 93.7869 206.181 93.5369C206.178 93.3097 206.111 93.1222 205.981 92.9744C205.85 92.8239 205.667 92.6989 205.431 92.5994C205.198 92.4972 204.925 92.4062 204.613 92.3267L203.62 92.071C202.901 91.8864 202.333 91.6065 201.915 91.2315C201.501 90.8537 201.293 90.3523 201.293 89.7273C201.293 89.2131 201.432 88.7628 201.711 88.3764C201.992 87.9901 202.374 87.6903 202.857 87.4773C203.34 87.2614 203.887 87.1534 204.498 87.1534C205.117 87.1534 205.66 87.2614 206.126 87.4773C206.594 87.6903 206.962 87.9872 207.229 88.3679C207.496 88.7457 207.634 89.1804 207.643 89.6719H206.121Z" fill="#16191C"/>
<rect x="269" width="49" height="74" rx="4" fill="#FF7500"/>
<path d="M281.212 54V48.6818L293.638 37.1761C294.695 36.1534 295.582 35.233 296.298 34.4148C297.025 33.5966 297.576 32.7955 297.951 32.0114C298.326 31.2159 298.513 30.358 298.513 29.4375C298.513 28.4148 298.281 27.5341 297.815 26.7955C297.349 26.0455 296.712 25.4716 295.906 25.0739C295.099 24.6648 294.184 24.4602 293.161 24.4602C292.093 24.4602 291.161 24.6761 290.366 25.108C289.57 25.5398 288.957 26.1591 288.525 26.9659C288.093 27.7727 287.877 28.733 287.877 29.8466H280.871C280.871 27.5625 281.388 25.5795 282.423 23.8977C283.457 22.2159 284.906 20.9148 286.769 19.9943C288.633 19.0739 290.781 18.6136 293.212 18.6136C295.712 18.6136 297.888 19.0568 299.741 19.9432C301.604 20.8182 303.053 22.0341 304.087 23.5909C305.121 25.1477 305.638 26.9318 305.638 28.9432C305.638 30.2614 305.377 31.5625 304.854 32.8466C304.343 34.1307 303.428 35.5568 302.11 37.125C300.792 38.6818 298.934 40.5511 296.536 42.733L291.44 47.7273V47.9659H306.099V54H281.212Z" fill="white"/>
<rect x="324" width="50" height="74" rx="4" fill="#FF7500"/>
<path d="M355.275 19.0909V54H347.894V26.0966H347.69L339.695 31.108V24.5625L348.337 19.0909H355.275Z" fill="white"/>
<path d="M294.927 87.2727H296.862L299.453 93.5966H299.555L302.146 87.2727H304.081V96H302.564V90.0043H302.483L300.071 95.9744H298.937L296.525 89.9915H296.444V96H294.927V87.2727ZM307.383 87.2727V96H305.802V87.2727H307.383ZM316.267 87.2727V96H314.861L310.749 90.0554H310.676V96H309.095V87.2727H310.51L314.618 93.2216H314.695V87.2727H316.267ZM323.491 87.2727H325.072V92.9744C325.072 93.5994 324.924 94.1491 324.629 94.6236C324.336 95.098 323.924 95.4687 323.393 95.7358C322.862 96 322.241 96.1321 321.531 96.1321C320.818 96.1321 320.196 96 319.664 95.7358C319.133 95.4687 318.721 95.098 318.429 94.6236C318.136 94.1491 317.99 93.5994 317.99 92.9744V87.2727H319.571V92.8423C319.571 93.206 319.65 93.5298 319.809 93.8139C319.971 94.098 320.199 94.321 320.491 94.483C320.784 94.642 321.13 94.7216 321.531 94.7216C321.931 94.7216 322.278 94.642 322.571 94.483C322.866 94.321 323.093 94.098 323.252 93.8139C323.412 93.5298 323.491 93.206 323.491 92.8423V87.2727ZM326.407 88.598V87.2727H333.37V88.598H330.673V96H329.104V88.598H326.407ZM334.712 96V87.2727H340.388V88.598H336.293V90.9673H340.094V92.2926H336.293V94.6747H340.423V96H334.712ZM346.744 89.6719C346.705 89.2997 346.537 89.0099 346.241 88.8026C345.949 88.5952 345.568 88.4915 345.099 88.4915C344.77 88.4915 344.487 88.5412 344.251 88.6406C344.016 88.7401 343.835 88.875 343.71 89.0455C343.585 89.2159 343.521 89.4105 343.518 89.6293C343.518 89.8111 343.56 89.9687 343.642 90.1023C343.727 90.2358 343.842 90.3494 343.987 90.4432C344.132 90.5341 344.293 90.6108 344.469 90.6733C344.645 90.7358 344.822 90.7884 345.001 90.831L345.82 91.0355C346.149 91.1122 346.466 91.2159 346.77 91.3466C347.077 91.4773 347.351 91.642 347.592 91.8409C347.837 92.0398 348.03 92.2798 348.172 92.5611C348.314 92.8423 348.385 93.1719 348.385 93.5497C348.385 94.0611 348.254 94.5114 347.993 94.9006C347.732 95.2869 347.354 95.5895 346.859 95.8082C346.368 96.0241 345.773 96.1321 345.074 96.1321C344.395 96.1321 343.805 96.027 343.305 95.8168C342.808 95.6065 342.419 95.2997 342.138 94.8963C341.859 94.4929 341.709 94.0014 341.686 93.4219H343.241C343.264 93.7259 343.358 93.9787 343.523 94.1804C343.688 94.3821 343.902 94.5327 344.166 94.6321C344.433 94.7315 344.732 94.7812 345.061 94.7812C345.405 94.7812 345.706 94.7301 345.964 94.6278C346.226 94.5227 346.43 94.3778 346.578 94.1932C346.726 94.0057 346.801 93.7869 346.804 93.5369C346.801 93.3097 346.734 93.1222 346.604 92.9744C346.473 92.8239 346.29 92.6989 346.054 92.5994C345.821 92.4972 345.548 92.4062 345.236 92.3267L344.243 92.071C343.524 91.8864 342.956 91.6065 342.538 91.2315C342.124 90.8537 341.916 90.3523 341.916 89.7273C341.916 89.2131 342.055 88.7628 342.334 88.3764C342.615 87.9901 342.997 87.6903 343.48 87.4773C343.963 87.2614 344.51 87.1534 345.121 87.1534C345.74 87.1534 346.283 87.2614 346.749 87.4773C347.217 87.6903 347.585 87.9872 347.852 88.3679C348.119 88.7457 348.257 89.1804 348.266 89.6719H346.744Z" fill="#16191C"/>
<rect x="404" width="49" height="74" rx="4" fill="#FF7500"/>
<path d="M414.536 47.8636V42.0511L429.109 19.0909H434.121V27.1364H431.155L421.967 41.6761V41.9489H442.678V47.8636H414.536ZM431.291 54V46.0909L431.428 43.517V19.0909H438.348V54H431.291Z" fill="white"/>
<rect x="459" width="50" height="74" rx="4" fill="#FF7500"/>
<path d="M483.616 18.6136C485.412 18.6136 487.139 18.9148 488.798 19.517C490.469 20.1193 491.957 21.0795 493.264 22.3977C494.582 23.7159 495.622 25.4659 496.384 27.6477C497.156 29.8182 497.548 32.483 497.56 35.642C497.56 38.608 497.224 41.2557 496.554 43.5852C495.895 45.9034 494.946 47.875 493.707 49.5C492.469 51.125 490.974 52.3636 489.224 53.2159C487.474 54.0568 485.52 54.4773 483.361 54.4773C481.031 54.4773 478.974 54.0284 477.19 53.1307C475.406 52.2216 473.969 50.9886 472.878 49.4318C471.798 47.8636 471.145 46.1023 470.918 44.1477H478.196C478.48 45.4205 479.077 46.4091 479.986 47.1136C480.895 47.8068 482.02 48.1534 483.361 48.1534C485.634 48.1534 487.361 47.1648 488.543 45.1875C489.724 43.1989 490.321 40.4773 490.332 37.0227H490.094C489.571 38.0455 488.866 38.9261 487.98 39.6648C487.094 40.392 486.077 40.9545 484.929 41.3523C483.793 41.75 482.582 41.9489 481.298 41.9489C479.241 41.9489 477.406 41.4659 475.793 40.5C474.179 39.5341 472.906 38.2045 471.974 36.5114C471.043 34.8182 470.577 32.8864 470.577 30.7159C470.565 28.375 471.105 26.2898 472.196 24.4602C473.287 22.6307 474.81 21.1989 476.764 20.1648C478.73 19.1193 481.014 18.6023 483.616 18.6136ZM483.668 24.4091C482.52 24.4091 481.497 24.6818 480.599 25.2273C479.713 25.7727 479.009 26.5057 478.486 27.4261C477.974 28.3466 477.724 29.375 477.736 30.5114C477.736 31.6591 477.986 32.6932 478.486 33.6136C478.997 34.5227 479.69 35.25 480.565 35.7955C481.452 36.3295 482.463 36.5966 483.599 36.5966C484.452 36.5966 485.241 36.4375 485.969 36.1193C486.696 35.8011 487.327 35.3636 487.861 34.8068C488.406 34.2386 488.832 33.5852 489.139 32.8466C489.446 32.108 489.599 31.3239 489.599 30.4943C489.588 29.392 489.327 28.3807 488.815 27.4602C488.304 26.5398 487.599 25.8011 486.702 25.2443C485.804 24.6875 484.793 24.4091 483.668 24.4091Z" fill="white"/>
<path d="M432.766 89.6719C432.726 89.2997 432.558 89.0099 432.263 88.8026C431.97 88.5952 431.59 88.4915 431.121 88.4915C430.791 88.4915 430.509 88.5412 430.273 88.6406C430.037 88.7401 429.857 88.875 429.732 89.0455C429.607 89.2159 429.543 89.4105 429.54 89.6293C429.54 89.8111 429.581 89.9687 429.664 90.1023C429.749 90.2358 429.864 90.3494 430.009 90.4432C430.154 90.5341 430.314 90.6108 430.49 90.6733C430.666 90.7358 430.844 90.7884 431.023 90.831L431.841 91.0355C432.171 91.1122 432.487 91.2159 432.791 91.3466C433.098 91.4773 433.372 91.642 433.614 91.8409C433.858 92.0398 434.051 92.2798 434.193 92.5611C434.335 92.8423 434.406 93.1719 434.406 93.5497C434.406 94.0611 434.276 94.5114 434.014 94.9006C433.753 95.2869 433.375 95.5895 432.881 95.8082C432.389 96.0241 431.794 96.1321 431.095 96.1321C430.416 96.1321 429.827 96.027 429.327 95.8168C428.83 95.6065 428.441 95.2997 428.159 94.8963C427.881 94.4929 427.73 94.0014 427.708 93.4219H429.263C429.286 93.7259 429.379 93.9787 429.544 94.1804C429.709 94.3821 429.923 94.5327 430.188 94.6321C430.455 94.7315 430.753 94.7812 431.083 94.7812C431.426 94.7812 431.727 94.7301 431.986 94.6278C432.247 94.5227 432.452 94.3778 432.6 94.1932C432.747 94.0057 432.823 93.7869 432.825 93.5369C432.823 93.3097 432.756 93.1222 432.625 92.9744C432.494 92.8239 432.311 92.6989 432.075 92.5994C431.843 92.4972 431.57 92.4062 431.257 92.3267L430.264 92.071C429.546 91.8864 428.977 91.6065 428.56 91.2315C428.145 90.8537 427.938 90.3523 427.938 89.7273C427.938 89.2131 428.077 88.7628 428.355 88.3764C428.637 87.9901 429.019 87.6903 429.502 87.4773C429.985 87.2614 430.531 87.1534 431.142 87.1534C431.762 87.1534 432.304 87.2614 432.77 87.4773C433.239 87.6903 433.607 87.9872 433.874 88.3679C434.141 88.7457 434.279 89.1804 434.287 89.6719H432.766ZM435.816 96V87.2727H441.492V88.598H437.397V90.9673H441.198V92.2926H437.397V94.6747H441.526V96H435.816ZM450.575 90.2173H448.981C448.936 89.956 448.852 89.7244 448.73 89.5227C448.608 89.3182 448.456 89.1449 448.274 89.0028C448.092 88.8608 447.885 88.7543 447.652 88.6832C447.422 88.6094 447.173 88.5724 446.906 88.5724C446.432 88.5724 446.011 88.6918 445.645 88.9304C445.278 89.1662 444.991 89.5128 444.784 89.9702C444.577 90.4247 444.473 90.9801 444.473 91.6364C444.473 92.304 444.577 92.8665 444.784 93.3239C444.994 93.7784 445.281 94.1222 445.645 94.3551C446.011 94.5852 446.43 94.7003 446.902 94.7003C447.163 94.7003 447.407 94.6662 447.635 94.598C447.865 94.527 448.071 94.4233 448.253 94.2869C448.437 94.1506 448.592 93.983 448.717 93.7841C448.845 93.5852 448.933 93.358 448.981 93.1023L450.575 93.1108C450.515 93.5256 450.386 93.9148 450.187 94.2784C449.991 94.642 449.734 94.9631 449.416 95.2415C449.098 95.517 448.726 95.733 448.3 95.8892C447.873 96.0426 447.4 96.1193 446.881 96.1193C446.113 96.1193 445.429 95.9418 444.827 95.5866C444.224 95.2315 443.75 94.7188 443.403 94.0483C443.057 93.3778 442.883 92.5739 442.883 91.6364C442.883 90.696 443.058 89.892 443.407 89.2244C443.757 88.554 444.233 88.0412 444.835 87.6861C445.437 87.331 446.119 87.1534 446.881 87.1534C447.366 87.1534 447.818 87.2216 448.236 87.358C448.653 87.4943 449.025 87.6946 449.352 87.9588C449.679 88.2202 449.947 88.5412 450.157 88.9219C450.371 89.2997 450.51 89.7315 450.575 90.2173ZM459.821 91.6364C459.821 92.5767 459.645 93.3821 459.293 94.0526C458.943 94.7202 458.466 95.2315 457.861 95.5866C457.259 95.9418 456.575 96.1193 455.811 96.1193C455.047 96.1193 454.362 95.9418 453.757 95.5866C453.155 95.2287 452.678 94.7159 452.325 94.0483C451.976 93.3778 451.801 92.5739 451.801 91.6364C451.801 90.696 451.976 89.892 452.325 89.2244C452.678 88.554 453.155 88.0412 453.757 87.6861C454.362 87.331 455.047 87.1534 455.811 87.1534C456.575 87.1534 457.259 87.331 457.861 87.6861C458.466 88.0412 458.943 88.554 459.293 89.2244C459.645 89.892 459.821 90.696 459.821 91.6364ZM458.232 91.6364C458.232 90.9744 458.128 90.4162 457.921 89.9616C457.716 89.5043 457.432 89.1591 457.068 88.9261C456.705 88.6903 456.286 88.5724 455.811 88.5724C455.337 88.5724 454.918 88.6903 454.554 88.9261C454.191 89.1591 453.905 89.5043 453.698 89.9616C453.493 90.4162 453.391 90.9744 453.391 91.6364C453.391 92.2983 453.493 92.858 453.698 93.3153C453.905 93.7699 454.191 94.1151 454.554 94.3509C454.918 94.5838 455.337 94.7003 455.811 94.7003C456.286 94.7003 456.705 94.5838 457.068 94.3509C457.432 94.1151 457.716 93.7699 457.921 93.3153C458.128 92.858 458.232 92.2983 458.232 91.6364ZM468.488 87.2727V96H467.081L462.969 90.0554H462.897V96H461.316V87.2727H462.731L466.839 93.2216H466.915V87.2727H468.488ZM473.168 96H470.21V87.2727H473.227C474.094 87.2727 474.838 87.4474 475.46 87.7969C476.085 88.1435 476.566 88.642 476.901 89.2926C477.236 89.9432 477.404 90.7216 477.404 91.6278C477.404 92.5369 477.235 93.3182 476.896 93.9716C476.561 94.625 476.077 95.1264 475.443 95.4759C474.813 95.8253 474.054 96 473.168 96ZM471.791 94.6321H473.091C473.699 94.6321 474.206 94.5213 474.612 94.2997C475.019 94.0753 475.324 93.7415 475.529 93.2983C475.733 92.8523 475.835 92.2955 475.835 91.6278C475.835 90.9602 475.733 90.4062 475.529 89.9659C475.324 89.5227 475.021 89.1918 474.621 88.973C474.223 88.7514 473.729 88.6406 473.138 88.6406H471.791V94.6321ZM483.649 89.6719C483.609 89.2997 483.441 89.0099 483.146 88.8026C482.853 88.5952 482.472 88.4915 482.004 88.4915C481.674 88.4915 481.392 88.5412 481.156 88.6406C480.92 88.7401 480.74 88.875 480.615 89.0455C480.49 89.2159 480.426 89.4105 480.423 89.6293C480.423 89.8111 480.464 89.9687 480.546 90.1023C480.632 90.2358 480.747 90.3494 480.892 90.4432C481.036 90.5341 481.197 90.6108 481.373 90.6733C481.549 90.7358 481.727 90.7884 481.906 90.831L482.724 91.0355C483.053 91.1122 483.37 91.2159 483.674 91.3466C483.981 91.4773 484.255 91.642 484.497 91.8409C484.741 92.0398 484.934 92.2798 485.076 92.5611C485.218 92.8423 485.289 93.1719 485.289 93.5497C485.289 94.0611 485.159 94.5114 484.897 94.9006C484.636 95.2869 484.258 95.5895 483.764 95.8082C483.272 96.0241 482.677 96.1321 481.978 96.1321C481.299 96.1321 480.71 96.027 480.21 95.8168C479.713 95.6065 479.323 95.2997 479.042 94.8963C478.764 94.4929 478.613 94.0014 478.59 93.4219H480.146C480.169 93.7259 480.262 93.9787 480.427 94.1804C480.592 94.3821 480.806 94.5327 481.07 94.6321C481.338 94.7315 481.636 94.7812 481.965 94.7812C482.309 94.7812 482.61 94.7301 482.869 94.6278C483.13 94.5227 483.335 94.3778 483.482 94.1932C483.63 94.0057 483.705 93.7869 483.708 93.5369C483.705 93.3097 483.639 93.1222 483.508 92.9744C483.377 92.8239 483.194 92.6989 482.958 92.5994C482.725 92.4972 482.453 92.4062 482.14 92.3267L481.147 92.071C480.428 91.8864 479.86 91.6065 479.443 91.2315C479.028 90.8537 478.82 90.3523 478.82 89.7273C478.82 89.2131 478.96 88.7628 479.238 88.3764C479.519 87.9901 479.901 87.6903 480.384 87.4773C480.867 87.2614 481.414 87.1534 482.025 87.1534C482.644 87.1534 483.187 87.2614 483.653 87.4773C484.122 87.6903 484.49 87.9872 484.757 88.3679C485.024 88.7457 485.161 89.1804 485.17 89.6719H483.649Z" fill="#16191C"/>
</svg>
<FooterBox/>
<div className="flex flex-row items-center justify-center gap-4 2xl:gap-10 mx-auto">
            <span className="text-black  text-2xl hover:text-orange-500 group flex justify-center relative cursor-pointer transition-all duration-300">
              <FaFacebookF />
              <div className="-bottom-2 w-0 group-hover:w-7 h-0.5 bg-orange-500 absolute transition-all duration-300" />
            </span>
            <span className="text-black  text-2xl hover:text-orange-500 group flex justify-center relative cursor-pointer transition-all duration-300">
              <IoLogoInstagram />
              <div className="-bottom-2 w-0 group-hover:w-7 h-0.5 bg-orange-500 absolute transition-all duration-300" />
            </span>
            <span className="text-black  text-2xl hover:text-orange-500 group flex justify-center relative cursor-pointer transition-all duration-300">
              <CiTwitter />
              <div className="-bottom-2 w-0 group-hover:w-7 h-0.5 bg-orange-500 absolute transition-all duration-300" />
            </span>
            <span className="text-black  text-2xl hover:text-orange-500 group flex justify-center relative cursor-pointer transition-all duration-300">
              <RiLinkedinLine />
              <div className="-bottom-2 w-0 group-hover:w-7 h-0.5 bg-orange-500 absolute transition-all duration-300" />
            </span>
          </div>
      </div>
     


    </div>
  );
};

export default Login;
