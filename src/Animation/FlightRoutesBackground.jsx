import { useEffect, useState } from "react";
import React from "react";
import Lottie from "lottie-react";

const FlightRoutesBackground = ({ theme = "light" }) => {
    const [planes, setPlanes] = useState([]);
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        const loadAnimation = async () => {
            try {
                const response = await fetch("/Animation - 1744326388971.json");
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setAnimationData(data);
            } catch (error) {
                console.error("Error loading animation:", error);
            }
        };
        
        loadAnimation();
    }, []);

    useEffect(() => {
        const generatePlanes = () => {
            const newPlanes = [];
            const destinations = [
                { name: "New York", x: 25, y: 40 },
                { name: "London", x: 45, y: 35 },
                { name: "Tokyo", x: 80, y: 40 },
                { name: "Sydney", x: 85, y: 70 },
                { name: "Dubai", x: 60, y: 45 },
                { name: "Paris", x: 47, y: 37 },
                { name: "Rio", x: 35, y: 65 }
            ];

            for (let i = 0; i < 5; i++) {
                const startIndex = Math.floor(Math.random() * destinations.length);
                let endIndex;
                do {
                    endIndex = Math.floor(Math.random() * destinations.length);
                } while (endIndex === startIndex);

                const start = destinations[startIndex];
                const end = destinations[endIndex];

                const duration = 15 + Math.random() * 10;

                newPlanes.push({
                    id: i,
                    start,
                    end,
                    duration,
                    delay: i * 3
                });
            }

            setPlanes(newPlanes);
        };

        generatePlanes();

        const interval = setInterval(generatePlanes, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                    theme === "dark" ? "opacity-40" : "opacity-20"
                }`}
            >
                {animationData && (
                    <Lottie 
                        animationData={animationData}
                        loop={true}
                        style={{
                            backgroundColor: theme === "dark" ? "#1a1a2e" : "#f0f8ff",
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                )}
            </div>

            <div className="absolute inset-0">
                {planes.map(plane => (
                    <React.Fragment key={`dest-${plane.id}`}>
                        <div
                            className="absolute w-2 h-2 rounded-full bg-primary"
                            style={{
                                left: `${plane.start.x}%`,
                                top: `${plane.start.y}%`,
                                boxShadow: `0 0 10px 2px var(--primary)`
                            }}
                        />
                        <div
                            className="absolute w-2 h-2 rounded-full bg-primary"
                            style={{
                                left: `${plane.end.x}%`,
                                top: `${plane.end.y}%`,
                                boxShadow: `0 0 10px 2px var(--primary)`
                            }}
                        />
                    </React.Fragment>
                ))}
            </div>

            {planes.map(plane => (
                <div
                    key={`plane-${plane.id}`}
                    className="absolute"
                    style={{
                        animation: `flightPath-${plane.id} ${plane.duration}s linear ${plane.delay}s infinite`,
                        opacity: 0.8
                    }}
                >
                    <div
                        className="w-4 h-4 transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                            backgroundImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQuBH-pe0oraD20TCltbmQpr7oRTjjUV9Rg&s`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            filter: theme === "dark" ? "brightness(1.5)" : "brightness(0.7)"
                        }}
                    />
                    <style jsx>{`
                        @keyframes flightPath-${plane.id} {
                            0% {
                                left: ${plane.start.x}%;
                                top: ${plane.start.y}%;
                                transform: rotate(${Math.atan2(plane.end.y - plane.start.y, plane.end.x - plane.start.x) * 180 / Math.PI}deg);
                            }
                            100% {
                                left: ${plane.end.x}%;
                                top: ${plane.end.y}%;
                                transform: rotate(${Math.atan2(plane.end.y - plane.start.y, plane.end.x - plane.start.x) * 180 / Math.PI}deg);
                            }
                        }
                    `}</style>
                </div>
            ))}

            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {planes.map(plane => (
                    <line
                        key={`path-${plane.id}`}
                        x1={`${plane.start.x}%`}
                        y1={`${plane.start.y}%`}
                        x2={`${plane.end.x}%`}
                        y2={`${plane.end.y}%`}
                        stroke={theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}
                        strokeWidth="1"
                        strokeDasharray="4 4"
                    />
                ))}
            </svg>
        </div>
    );
};

export default FlightRoutesBackground;
