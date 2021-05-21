import { AsyncTypeahead, Menu, MenuItem } from 'react-bootstrap-typeahead';

export default function TranslatableTypeahead(props) {
    const { translate } = props;
    return (
        <AsyncTypeahead
            {...props}
            promptText={translate.typeToSearch}
            searchText={translate.searching}
            renderMenu={
                (results, menuProps) => (
                    <Menu {...menuProps} emptyLabel={translate.noMatchesFound}>
                    {results.map((result, index) => (
                        <MenuItem option={result} position={index}>
                        {result.label}
                        </MenuItem>
                    ))}
                    </Menu>
                )
            } />
    )
}