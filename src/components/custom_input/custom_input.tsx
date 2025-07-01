

export const CustomInput = ({
    label,
    name,
    value,
    onChange,
}: {
    label: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                className="input input-bordered"
            />
        </div>
    )
}
