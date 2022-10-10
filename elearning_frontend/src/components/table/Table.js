import "./table.css";

const Table = () => {
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joining Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>2022001</td>
                        <td>Instr. Name</td>
                        <td>Instr. Email</td>
                        <td>2022-Oct-03</td>
                    </tr>

                    <tr>
                        <td>2022001</td>
                        <td>Instr. Name</td>
                        <td>Instr. Email</td>
                        <td>2022-Oct-03</td>
                    </tr>

                    <tr>
                        <td>2022001</td>
                        <td>Instr. Name</td>
                        <td>Instr. Email</td>
                        <td>2022-Oct-03</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table