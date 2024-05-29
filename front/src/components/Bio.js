import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-left">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2>Health Care</h2>
                <p>
                

Nosso projeto tem o intuito de oferecer uma experiência acolhedora e confidencial. Em um mundo onde o acesso à informação é crucial para o bem-estar, apresentamos Health Care. Nosso compromisso é fornecer suporte e orientação para suas preocupações de saúde, quando e onde você precisar.
Se você está lidando com preocupações de saúde mental, questões físicas ou simplesmente precisa de conselhos sobre como manter um estilo de vida saudável, estamos aqui para ajudar.
No entanto, lembre-se de que sou um programa de computador e não um profissional de saúde. Posso fornecer informações gerais e dicas sobre saúde com base em dados disponíveis publicamente, mas não posso oferecer diagnósticos específicos ou substituir a consulta com um médico qualificado.
                </p>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
            
        </div>
    )
}



