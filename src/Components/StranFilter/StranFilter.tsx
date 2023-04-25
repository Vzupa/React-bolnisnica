import {TabelaZaposlenih} from "../TabelaZaposlenih";
import {OddelekOption} from "../OddelekOption";
import React, {useState} from "react";

interface StranFilterProps {
    pogoj: boolean;
}

export const StranFilter = (props: StranFilterProps): JSX.Element => {
    const [selectedOddelkiId, setSelectedOddelkiId] = useState<number>(0);

    const handleOddelkiChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const oddelekId = parseInt(event.target.value);
        setSelectedOddelkiId(oddelekId);
    };

    return(
        <div className="d-flex flex-column align-items-center">
            <div className="form-group">
                <label htmlFor="oddelek-select">Filtriranje po oddelkih:</label>
                <select id="oddelek-select" className="form-control" value={selectedOddelkiId.toString()} onChange={handleOddelkiChange}>
                    <OddelekOption />
                </select>
            </div>
            <div className="table-responsive">
                <TabelaZaposlenih pogoj={props.pogoj} oddelekID={selectedOddelkiId}/>
            </div>
        </div>

    );
}