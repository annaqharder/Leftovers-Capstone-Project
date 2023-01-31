import BarCard from './BarCard'

function BarList({ eateries }) {
    return (
        <div>
            <div>
                {eateries.map(bar => (
                    <div>
                        <BarCard
                            key={bar.id}
                            bar={bar}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default BarList;