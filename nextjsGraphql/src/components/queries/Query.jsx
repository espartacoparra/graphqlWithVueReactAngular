import { useGraphQL } from 'graphql-react'

export const QueryRequest = ({ onChange, type, queryGet }) => {
    const { loading, cacheValue: { data } = {} } = useGraphQL({
        fetchOptionsOverride(options) {
            options.url = 'http://localhost:4000/graphql'
        },
        operation: {
            query:
                queryGet

        },

        loadOnMount: true,
        loadOnReload: true,
        loadOnReset: true,
    })

    console.log(data);

    return !loading ? (
        <div className="row mt-4">
            <div className="col-2">
                <h4>Consulta</h4>
                <pre>{queryGet}</pre>
            </div>
            <div className="col-4">
                <h4>Edita tu Consulta</h4>
                <label>
                    <textarea value={queryGet} name="getAllUsers" cols="40" rows="20" onChange={(event) => onChange(event, type)}></textarea>
                </label>
            </div>
            <div className="col-4">
                <div>
                    {data !== undefined ?
                        <div ><pre>{JSON.stringify(data, null, 2)}</pre></div>
                        : <>parametros erroneos</>
                    }
                </div>
            </div>
            {/* <div className="col-2 ">
          <Button className="mt-5" variant="secondary">Ejecutar query</Button>
        </div> */}
        </div>
    ) :
        < p > Loading…</p >

};

export default QueryRequest
