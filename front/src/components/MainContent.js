import React from 'react';
import './Bordas.css';
import './Chat.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'

import 'primereact/resources/themes/lara-dark-amber/theme.css'


import { useState } from 'react';
import { Dock } from 'primereact/dock';
import { RadioButton } from 'primereact/radiobutton';


export default function BasicDemo() {
    const [position, setPosition] = useState('left');    
    const items = [
        {
            label: 'Photos',
            icon: () => <img alt="Home" src="https://cdn-icons-png.flaticon.com/512/4084/4084351.png" width="100%" />,
        },
        {
            label: 'Finder',
            icon: () => <img alt="Config" src="https://cdn-icons-png.flaticon.com/512/3686/3686811.png" width="100%" />,
        },
        {
            label: 'App Store',
            icon: () => <img alt="Chat" src="https://cdn-icons-png.flaticon.com/512/5962/5962463.png" width="100%" />,
        },
        
        {
            label: 'Trash',
            icon: () => <img alt="Lixo" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
        }
    ];

    const positions = [
       
    ];

    return (
        <div className="card dock-demo">
            <div className="flex flex-wrap gap-3 mb-5">
                {positions.map((option) => {
                    const { value, label } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={label} onChange={() => setPosition(option.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">
                                {label}
                            </label>
                        </div>
                    );
                })}
            </div>
            <div className="dock-window" style={{ backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)' }}>
                <Dock model={items} position={position} />
            </div>
        </div>
    )
}
        