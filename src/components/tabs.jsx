import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

import MapWithMarker from './map';

export function TabsDefault() {
    const data = [
        {
            label: "CERIMONIA",
            value: "cerimonia",
            desc: <MapWithMarker
                position={[42.15874995882924, 12.224626909233246]}
                popupText="CERIMONIA: Via della Rena, 99, 00069 Trevignano Romano RM, Italy"
                markerColour="green"
            />,
        },
        {
            label: "RICEVIMENTO",
            value: "ricevimento",
            desc: <MapWithMarker
                position={[42.16498943948103, 12.229883605276306]}
                popupText="RICEVIMENTO: Il Frantoio, Via Sutri, 3, 00069 Trevignano Romano RM, Italy"
                markerColour="gold"
            />,
        },
    ];

    return (
        <Tabs value="cerimonia">
            <TabsHeader>
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}