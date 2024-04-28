import { placesType } from "./types/types";

type Props = {

    data: placesType

};

const PlacesPrint = ({ data }: Props) => {

    return (
        <div className="WholeTable">
            <table className="table">
                <thead>
                    <tr className="TableTitle">
                        <th>Name</th>
                        <th>Distance</th>
                    </tr>
                </thead>
                <tbody id="places">
                    {
                        data.features.filter((x, i) => x.properties.name != "")
                            .map((x, i) => (
                                <tr key={i}>
                                    <td>{x.properties.name}</td>
                                    <td>{Math.round(x.properties.dist)}m</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default PlacesPrint;