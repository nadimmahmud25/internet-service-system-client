import React from 'react';
import './AllServices.css'

const AllServicesInfo = ({ allServices, updateStatus }) => {


    return (
        <table className="table table-borderless" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email ID</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Package Details</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    allServices.map((service) =>
                        <tr key={service._id}>
                            <td>{service.name}</td>
                            <td>{service.email}</td>
                            <td>{service.service}</td>
                            <td>{service.description}</td>

                            <td>
                                <select onChange={(e) => updateStatus(e, service._id)} className="custom-select mr-5" id="inputGroupSelect01" >
                                    {
                                        service.status === 'Pending'
                                        &&
                                        <>
                                            <option value="Pending" defaultValue style={{ color: '#FF4545' }}>
                                                Pending
                                             </option>
                                            <option value="Ongoing">Ongoing</option>
                                            <option value="Done">Done</option>
                                        </>
                                    }
                                    {
                                        service.status === 'Ongoing'
                                        &&
                                        <>
                                            <option value="Ongoing" defaultValue style={{ color: '#FFBD3E' }}>
                                                Ongoing
                                            </option>
                                            <option value="Ongoing">Done</option>
                                            <option value="Done">Pending</option>
                                        </>
                                    }
                                    {
                                        service.status === 'Done'
                                        &&
                                        <>
                                            <option value="Done" defaultValue style={{ color: '#009444' }}>
                                                Done
                                            </option>
                                            <option value="Ongoing">Ongoing</option>
                                            <option value="Done">Pending</option>
                                        </>
                                    }
                                </select>
                            </td>

                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AllServicesInfo;