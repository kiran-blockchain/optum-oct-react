export const Dropdown = ({ dropdownConfig }) => {
    return (
        <div class="row mb-3">
            <label for={dropdownConfig.id}
                class="col-sm-2 col-form-label">{dropdownConfig.label}</label>
            <div class="col-sm-4">
                <select id={dropdownConfig.id}
                className="form-control"
                    name={dropdownConfig.name}>
                    <option value="">{dropdownConfig.placeholder}</option>
                </select>
            </div>
        </div>
    )
};