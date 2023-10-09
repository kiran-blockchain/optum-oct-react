export const Textbox = ({textboxConfig}) => {
    return (
        <div class="row mb-3">
            <label for={textboxConfig.id}
                class="col-sm-2 col-form-label">{textboxConfig.label}</label>
            <div class="col-sm-4">
                <input type={textboxConfig.type}
                    class="form-control"
                    id={textboxConfig.id}
                    name={textboxConfig.name}
                    placeholder={textboxConfig.placeholder} />
            </div>
        </div>
    )
}