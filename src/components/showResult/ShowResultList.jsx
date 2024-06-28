import Shops from "../../data/shops.json";

export default function ShowResultList({ mallIDArg }) {

    // Filter shops based on the arg mall id
    const filteredShops = Shops.filter(shop => shop["Mall ID"] === mallIDArg);

    return (
        <div className="flex flex-col gap-5">
            {filteredShops.map((shop) => (
                <ul key={shop.ID}>
                    <li>Name: {shop.Name}</li>
                    <li>Level: {shop.Level}</li>
                    <li>Lot: {shop.Lot}</li>
                    <li>Near (Left): {shop["Near (Left)"]}</li>
                    <li>Near (Right): {shop["Near (Right)"]}</li>
                    <li>Categories: {shop.Categories}</li>
                    <li>Also Near: {shop["Also Near"]}</li>
                </ul>
            ))}
        </div>
    );
}
