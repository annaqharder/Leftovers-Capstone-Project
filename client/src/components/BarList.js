import BarCard from './BarCard'

function BarList({ bars }) {
    return (
        <div>
            <div>
                {bars.map(bar => (
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