import React from 'react';
// import "./SearchResults.css";



class SearchResults extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
            cocktailName: "",
            cocktailRecipe: "",
            selectedCocktail: ""
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    handleDropdownChange(e) {

        this.setState({ selectedCocktail: e.target.value });
        // this.showRecipe(this.state.selectedCocktail);
        this.props.showRecipeFunc(e.target.value, "");
    }

    hideDropdownMenu() {
        // set the cocktail and recipie that was clicked on

        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <div className="button" onClick={this.showDropdownMenu} >
                            {this.props.label} </div>
                           
                        <select name={this.props.label} id="dropdown" onChange={this.handleDropdownChange}>
                            <option>CLICK TO SEE RESULTS</option>
                            {this.props.cocktailArray.map(item => {
                                return <option key={item.id} value={item.name}> {item.name} </option>
                            })}
                        </select>
                    </div>

                </div>
            </div>


        );
    }
}

export default SearchResults;