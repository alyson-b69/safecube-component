import { StyledTable, ViewMore } from "./ShipmentsList.style"
import { data } from "./data"

const ShipmentsList = () => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th> </th>
                    <th>Container & shipment</th>
                    <th>Customer</th>
                    <th>Type</th>
                    <th>Departure date</th>
                    <th>Departure place</th>
                    <th>Arrival date</th>
                    <th>Arrival place</th>
                </tr>
            </thead>
            <tbody>
            {data.map((item, index) => {
                return (
                    <tr key={item.shipment_number + item.container_id + index}>
                        <td><ViewMore><span/></ViewMore></td>
                        <td>
                            {item.container_id} <br/>
                            {item.shipment_number}
                        </td>
                        <td>{item.end_customer.name}</td>
                        <td>{item.type}</td>
                        <td>19/01/2021 - 11:45</td>
                        <td>{item.pod.name}</td>
                        <td>24/01/2021 - 15:42</td>
                        <td>{item.poa.name}</td>
                    </tr>
                )

            })}
            </tbody>
        </StyledTable>
    )
}

export default ShipmentsList