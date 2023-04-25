import {originalOddelki} from "../../Modules/main";

export const OddelekOption = (): JSX.Element => {
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