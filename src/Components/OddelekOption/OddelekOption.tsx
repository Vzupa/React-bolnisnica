import {originalOddelki} from "../../Modules/main";

export const OddelekOption = () => {
    return (
        <>
            <option value="">-- Izberi oddelek --</option>
            {originalOddelki.map((oddelek) => (
                <option key={oddelek.id} value={oddelek.id}>
                    {oddelek.ime}
                </option>
            ))}
        </>
    );
}