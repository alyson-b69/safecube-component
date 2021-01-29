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
                    <span className='mobile-title'>Shipment history list</span>
                </tr>
            </thead>
            <tbody>
            {data.map((item, index) => {
                return (
                    <tr key={item.shipment_number + item.container_id + index}>
                        <td><ViewMore><span/></ViewMore></td>
                        <td data-label={'Container, shipment number'}>
                            {item.container_id} <br/>
                            {item.shipment_number}
                        </td>
                        <td data-label={'Customer'}>{item.end_customer.name}</td>
                        <td data-label={'Type'}>{item.type}</td>
                        <td data-label={'Departure date'}>19/01/2021 - 11:45</td>
                        <td data-label={'Departure place'}>{item.pod.name}</td>
                        <td data-label={'Arrival date'}>24/01/2021 - 15:42</td>
                        <td data-label={'Arrival place'}>{item.poa.name}</td>
                    </tr>
                )

            })}
            </tbody>
        </StyledTable>
    )
}

export default ShipmentsList