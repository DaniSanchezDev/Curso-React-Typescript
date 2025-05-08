import { useMemo } from 'react'
import { useCryptoStore } from '../store'
import Spinner from './Spinner'

function CryptoPriceDisplay() {
    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)

    const hasResult = useMemo(() => {
        return result && Object.keys(result).length > 0 && result.PRICE
    }, [result])

    return (
        <div className='result-wrapper'>  
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotización:</h2>
                    <div className='result'>
                        <img 
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt=''
                        />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>El precio mas alto del día es de: <span>{result.HIGHDAY}</span></p>
                            <p>El precio mas bajo del día es de: <span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24h: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>   
            )}
        </div>
    )
}

export default CryptoPriceDisplay
