import prod from "./prod.json"

export default function Comp2 () {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>category</th>
                    <th>price</th>
                    <th>discountPercentage</th>
                    <th>rating</th>
                    <th>stock</th>
                    <th>tags</th>
                    <th>brand</th>
                    <th>sku</th>
                    <th>weight</th>
                    <th>dimensions</th>
                    <th>warrantyInformation</th>
                    <th>shippingInformation</th>
                    <th>availabilityStatus</th>
                    <th>images</th>
                </tr>
            </thead>
            <tbody>
                {
                    prod.products.map((p, i) => {
                        return (
                            <tr key={i}>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.description}</td>
                                <td>{p.category}</td>
                                <td>{p.price}</td>
                                <td>{p.discountPercentage}</td>
                                <td>{p.rating}</td>
                                <td>{p.stock}</td>
                                <td>{p.tags}</td>
                                <td>{p.brand}</td>
                                <td>{p.sku}</td>
                                <td>{p.weight}</td>
                                <td>{p.dimensions?.width} x {p.dimensions?.height}</td>
                                <td>{p.warrantyInformation}</td>
                                <td>{p.shippingInformation}</td>
                                <td>{p.availabilityStatus}</td>
                                <td>
                                    {p.images.map((img, index) => (
                                        <img key={index} src={img} width="50" alt="product" />
                                    ))}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}