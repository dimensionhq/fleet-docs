
import { Component, createSignal, onMount } from 'solid-js';
import Logo from "../assets/logo.svg"
import Hero from '../components/Hero';
import Terminal from '../components/Terminal';
import Code from '../components/Terminal/code';
import Dimension from '../assets/dimension.svg';
import Header from "../assets/header.png";


const Index: Component = () => {
    return (
        <div class='w-full flex flex-col gap-[102px]'>
            <img class='hidden' src={Header} alt="" />
            <div class='mx-[123px]'>
                <div class='pt-[49px]'>
                    <img src={Logo} />
                </div>
                <Hero />
                <Terminal />
                <div class='w-full h-full flex items-center text-white justify-center flex-col gap-8'>
                    <h1 class='text-5xl font-extrabold '>let’s fleet_</h1>
                    <Code onClick={() => {
                        window.navigator.clipboard.writeText("fleet run")
                    }}>
                        <div class='flex justify-between'>
                            <h1>{'>'} fleet run</h1>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.503 4.627L5.5 6.75V17.254C5.5 18.116 5.84241 18.9426 6.4519 19.5521C7.0614 20.1616 7.88805 20.504 8.75 20.504H17.366C17.2107 20.9427 16.9233 21.3225 16.5433 21.5911C16.1633 21.8598 15.7094 22.004 15.244 22.004H8.75C7.49022 22.004 6.28204 21.5036 5.39124 20.6128C4.50045 19.722 4 18.5138 4 17.254V6.75C4 5.77 4.627 4.935 5.503 4.627ZM13.128 2C13.725 2 14.298 2.237 14.72 2.66L19.338 7.28C19.76 7.702 19.997 8.275 19.997 8.871V17.254C19.997 17.8507 19.7599 18.423 19.338 18.845C18.916 19.2669 18.3437 19.504 17.747 19.504H8.752C8.15526 19.504 7.58297 19.2669 7.16101 18.845C6.73905 18.423 6.502 17.8507 6.502 17.254V4.25C6.502 3.65326 6.73905 3.08097 7.16101 2.65901C7.58297 2.23705 8.15526 2 8.752 2H13.128ZM13 3.5H8.752C8.55309 3.5 8.36232 3.57902 8.22167 3.71967C8.08102 3.86032 8.002 4.05109 8.002 4.25V17.254C8.002 17.668 8.338 18.004 8.752 18.004H17.747C17.9459 18.004 18.1367 17.925 18.2773 17.7843C18.418 17.6437 18.497 17.4529 18.497 17.254V9.003H15.25C14.68 9.00309 14.1313 8.78686 13.7146 8.398C13.2979 8.00913 13.0443 7.47661 13.005 6.908L13 6.754V3.5ZM14.5 4.561L14.501 6.754C14.501 7.134 14.783 7.447 15.149 7.497L15.251 7.504L17.441 7.503L14.501 4.561H14.5Z" fill="white" />
                            </svg>
                        </div>
                    </Code>
                    <Code onClick={() => {
                        window.navigator.clipboard.writeText("fleet build")
                    }}>
                        <div class='flex justify-between'>
                            <h1>{'>'} fleet build</h1>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.503 4.627L5.5 6.75V17.254C5.5 18.116 5.84241 18.9426 6.4519 19.5521C7.0614 20.1616 7.88805 20.504 8.75 20.504H17.366C17.2107 20.9427 16.9233 21.3225 16.5433 21.5911C16.1633 21.8598 15.7094 22.004 15.244 22.004H8.75C7.49022 22.004 6.28204 21.5036 5.39124 20.6128C4.50045 19.722 4 18.5138 4 17.254V6.75C4 5.77 4.627 4.935 5.503 4.627ZM13.128 2C13.725 2 14.298 2.237 14.72 2.66L19.338 7.28C19.76 7.702 19.997 8.275 19.997 8.871V17.254C19.997 17.8507 19.7599 18.423 19.338 18.845C18.916 19.2669 18.3437 19.504 17.747 19.504H8.752C8.15526 19.504 7.58297 19.2669 7.16101 18.845C6.73905 18.423 6.502 17.8507 6.502 17.254V4.25C6.502 3.65326 6.73905 3.08097 7.16101 2.65901C7.58297 2.23705 8.15526 2 8.752 2H13.128ZM13 3.5H8.752C8.55309 3.5 8.36232 3.57902 8.22167 3.71967C8.08102 3.86032 8.002 4.05109 8.002 4.25V17.254C8.002 17.668 8.338 18.004 8.752 18.004H17.747C17.9459 18.004 18.1367 17.925 18.2773 17.7843C18.418 17.6437 18.497 17.4529 18.497 17.254V9.003H15.25C14.68 9.00309 14.1313 8.78686 13.7146 8.398C13.2979 8.00913 13.0443 7.47661 13.005 6.908L13 6.754V3.5ZM14.5 4.561L14.501 6.754C14.501 7.134 14.783 7.447 15.149 7.497L15.251 7.504L17.441 7.503L14.501 4.561H14.5Z" fill="white" />
                            </svg>
                        </div>
                    </Code>

                </div>
            </div >
            <div style={{
                "background-image": `url(${Dimension})`,
                "background-size": "cover",
                "background-position": "center",
                width: "100vw",
                height: "100vh",
                position: "relative"
            }} class='w-full text-center h-full'>
            </div>
        </div >
    );
};

export default Index;