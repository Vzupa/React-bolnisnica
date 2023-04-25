import {useOddelki} from "../../App";
import {Oddelek} from "../../Modules/Oddelek";

export const OddelekOption = (): JSX.Element => {
    const { oddelki } = useOddelki();
    return (
        <>
            <option value="0">-- Izberi oddelek --</option>
            {oddelki.map((oddelek: Oddelek) => (
                <option key={oddelek.id} value={oddelek.id}>
                    {oddelek.ime}
                </option>
            ))}
        </>
    );
}