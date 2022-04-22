import { useLocation, useNavigate } from "solid-app-router";
import Fire from "../assets/fire.svg"
import { Button } from './Button';

const Hero = () => {
    const navigate = useNavigate();

    return <div class='w-full min-h-[calc(100vh-73px-20vh)] flex items-center justify-center flex-col gap-6'>
        <div class='text-5xl leading-[63.36px] font-extrabold text-white flex gap-2'>
            <h1>rust builds. supercharged</h1>
            <img src={Fire} alt="" />
        </div>
        <h3 class='text-[19px] text-center text-white leading-7 font-light'>fleet makes your rust builds up to 5x faster.</h3>
        <div class='gap-2 flex items-center'>
            <Button onClick={() => window.scrollTo({ top: 1200, behavior: 'smooth' })}>install</Button>
            <Button onClick={() => navigate("/docs/start/getting-started")}>get started</Button>
        </div>
    </div>
}


export default Hero