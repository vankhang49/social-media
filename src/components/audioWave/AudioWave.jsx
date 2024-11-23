import "./AudioWave.scss";
import {IoMdPlay} from "react-icons/io";
import {useEffect, useRef, useState} from "react";
import {TbPlayerPauseFilled, TbPlayerPlayFilled} from "react-icons/tb";

export function AudioWave({audio, key, className}) {
    const audioElement = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (!isPlaying) {
            audioElement.current?.pause();
        } else {
            audioElement.current?.play();
        }
    }, [isPlaying]);

    const handlePlayAudio = () => {
        setIsPlaying(!isPlaying);
    }

    const handleTimeLineChange = (value) => {
        const newTime = parseInt(value);
        audioElement.current.currentTime = newTime;
        setCurrentTime(newTime);

        if (!isPlaying) {
            setIsPlaying(true);
            audioElement.current?.play();
        }
    }

    const handleLoadedData = () => {
        setDuration(audioElement.current.duration);
        if (isPlaying) audioElement.current?.play();
    };

    return (
        <div id="audio-wave" key={key} className={className}>
            <button onClick={handlePlayAudio} className={'play-audio'}>
                {isPlaying ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled />}
            </button>
            <div className={`wave-container ${isPlaying ? "playing": "pause"}`}>
                <div className="rectangle-1" onClick={() =>handleTimeLineChange(0)}></div>
                <div className="rectangle-2" onClick={() =>handleTimeLineChange(duration*(1/10))}></div>
                <div className="rectangle-3" onClick={() =>handleTimeLineChange(duration*(2/10))}></div>
                <div className="rectangle-4" onClick={() =>handleTimeLineChange(duration*(3/10))}></div>
                <div className="rectangle-5" onClick={() =>handleTimeLineChange(duration*(4/10))}></div>
                <div className="rectangle-6" onClick={() =>handleTimeLineChange(duration*(5/10))}></div>
                <div className="rectangle-5" onClick={() =>handleTimeLineChange(duration*(6/10))}></div>
                <div className="rectangle-4" onClick={() =>handleTimeLineChange(duration*(7/10))}></div>
                <div className="rectangle-3" onClick={() =>handleTimeLineChange(duration*(8/10))}></div>
                <div className="rectangle-2" onClick={() =>handleTimeLineChange(duration*(9/10))}></div>
                <div className="rectangle-1" onClick={() =>handleTimeLineChange(duration)}></div>
            </div>
            <audio
                src={audio}
                ref={audioElement}
                autoPlay={false}
                onLoadedData={handleLoadedData}
                onTimeUpdate={() => setCurrentTime(audioElement.current.currentTime)}
            />
        </div>

    )
}