import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import {FusePageSimple} from '@fuse';
import { Input } from '@progress/kendo-react-inputs';
import _ from '@lodash';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../store/actions';
import history from '@history';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from "./products.json";


import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
  } from '@progress/kendo-react-charts';

  const columns = [
    // {
    //   field: "ProductID",
    //   title: "ID",
    //   minWidth: 60,
    // },
    {
      field: "ProductName",
      title: "Name",
      width: "900px",
    },
    {
      field: "CategoryName",
      title: "CategoryName",
      minGridWidth: 400,
    },
    {
      field: "Price",
      title: "Price",
      minGridWidth: 400,
    },
    {
      field: "Stock",
      title: "In stock",
      minGridWidth: 400,
    },
  ];

  const styles = theme => ({
        layoutRoot: {}
  });

  const categories = [2002, 2003, 2004];
  const series = [
    {
      name: "India",
      data: [3.907, 7.943, 7.848],
    },
    {
      name: "Russian Federation",
      data: [4.743, 7.295, 7.175],
    },
    {
      name: "Germany",
      data: [0.21, 0.375, 1.161],
    },
    {
      name: "World",
      data: [1.988, 2.733, 3.994],
    },
  ];
  const areaData = [
    {
      name: "World",
      data: [3.988, 3.733, 3.994],
    },
    {
      name: "Germany",
      data: [2.21, 2.375, 2.161],
    },
    {
      name: "Russian Federation",
      data: [1.743, 1.295, 1.175],
    },
    {
      name: "India",
      data: [0.907, 0.943, 0.848],
    },
  ];
  const pieData = [
    {
      name: "India",
      share: 0.24,
    },
    {
      name: "Russian Federation",
      share: 0.26,
      explode: true,
    },
    {
      name: "Germany",
      share: 0.1,
    },
    {
      name: "World",
      share: 0.4,
    },
  ];

class Home extends Component {

    customizeLabel(e) {
        return `${e.argumentText}\n${e.valueText}`;
      }

    state = { success: false, error: false, warning: false, info: false, none: false };
    onToggle = (flag) => this.setState({ [flag]: !this.state[flag] });

    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            prods: [],
            oriProds: []
        };

        this.changeName = this.changeName.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;

        this.props.getAllProds()
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    componentWillReceiveProps(nextProps) {
        if ( !_.isEqual(this.props.prods, nextProps.prods) ) {   
            
            console.log( 'prosps =', nextProps.prods.prods )
            this._isMounted && this.setState({
                prods : nextProps.prods.prods,
                oriProds : nextProps.prods.prods
            })
        }        
    }

    changeCategory(e) {
        let category = this.refs.com_category.value
        let ret = []
        this.state.oriProds.map( prod => {
            if ( prod.CategoryName.includes( category ) ){
                ret.push( prod )
            }
        })

        this.setState({
            prods: ret
        })
    }

    changeName(e) {
        let name = this.refs.com_name.value
        let ret = []
        this.state.oriProds.map( prod => {
            if ( prod.ProductName.includes( name ) ){
                ret.push( prod )
            }
        })

        console.log( 'prodsssssss =', ret )
        this.setState({
            prods: ret
        })
    }
    
    render()
    {
        const {classes} = this.props;
        return (

            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}                               
                content={
                    <div className="flex flex-col h-full">
                        <div className="flex flex-row mt-16 ml-16">
                            <div className="flex flex-row p-16 w-full sm:w-full md:w-1/3 items-center">
                                <h3 className="w-1/2">Filter 1:</h3>
                                <div className="w-1/2 mr-16">
                                        <Input                                                
                                            ref="com_name"
                                            type="text"
                                            style={{width:'100%'}}                                                                                                                                                                
                                            onChange={this.changeName}                                 
                                        />   
                                </div>                                
                            </div>
                            <div className="flex flex-row p-16 w-full sm:w-full md:w-1/3 items-center">
                                <h3 className="w-1/2">Filter 2:</h3>
                                <div className="w-1/2 mr-16">
                                        <Input                                                
                                            ref="com_category"
                                            type="text"
                                            style={{width:'100%'}}                                                                                            
                                            // value={ this.state.company && this.state.company.name|| ''}         
                                            onChange={this.changeCategory}                                 
                                        />   
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap">
                            <div className="flex w-full md:w-1/3">
                                <div className="m-24 border-1 rounded-4 w-full">
                                    <div className="flex flex-col items-center" style={{marginTop:'16px'}}>
                                        <div className="flex flex-col relative items-center">
                                        <Chart
                                            style={{
                                            height: 350,
                                            }}
                                        >
                                            <ChartTitle text="Column Chart" />
                                            <ChartLegend position="top" orientation="horizontal" />
                                            <ChartCategoryAxis>
                                            <ChartCategoryAxisItem categories={categories} startAngle={45} />
                                            </ChartCategoryAxis>
                                            <ChartSeries>
                                            {series.map((item, idx) => (
                                                <ChartSeriesItem
                                                key={idx}
                                                type="column"
                                                tooltip={{
                                                    visible: true,
                                                }}
                                                data={item.data}
                                                name={item.name}
                                                />
                                            ))}
                                            </ChartSeries>
                                        </Chart>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="flex w-full md:w-1/3">
                                <div className="m-24 border-1 rounded-4 w-full">
                                    <div className="flex flex-col items-center" style={{marginTop:'16px'}}>
                                        <div className="flex flex-col relative items-center">
                                        <Chart
                                            style={{
                                            height: 350,
                                            }}
                                        >
                                            <ChartTitle text="Line Chart" />
                                            <ChartLegend position="top" orientation="horizontal" />
                                            <ChartCategoryAxis>
                                            <ChartCategoryAxisItem categories={categories} startAngle={45} />
                                            </ChartCategoryAxis>
                                            <ChartSeries>
                                            {series.map((item, idx) => (
                                                <ChartSeriesItem
                                                key={idx}
                                                type="line"
                                                tooltip={{
                                                    visible: true,
                                                }}
                                                data={item.data}
                                                name={item.name}
                                                />
                                            ))}
                                            </ChartSeries>
                                        </Chart>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full md:w-1/3">
                                <div className="m-24 border-1 rounded-4 w-full">
                                    <div className="flex flex-col items-center" style={{marginTop:'16px'}}>
                                        <div className="flex flex-col relative items-center">
                                            
                                            <Chart
                                                style={{
                                                height: 350,
                                                }}
                                            >
                                                <ChartTitle text="Pie Chart" />
                                                <ChartLegend position="top" orientation="horizontal" />
                                                <ChartSeries>
                                                <ChartSeriesItem
                                                    type="pie"
                                                    overlay={{
                                                    gradient: "sharpBevel",
                                                    }}
                                                    tooltip={{
                                                    visible: true,
                                                    }}
                                                    data={pieData}
                                                    categoryField="name"
                                                    field="share"
                                                />
                                                </ChartSeries>
                                            </Chart>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full  m-24 pr-48">                                                               
                                
                                <div className="flex flex-col border-gray border-1">
                                    <div className="flex flex-row mt-16">
                                        <Grid
                                            style={{
                                                height: "420px",
                                                width:'100%'
                                            }}
                                            data={this.state.prods}>
                                                {columns.map((column, index) => {
                                                return (
                                                    <Column
                                                        field={column.field}
                                                        title={column.title}
                                                        key={index}
                                                        width={column.minWidth}
                                                    />
                                                );
                                                })}
                                        </Grid>

                                        <Grid                                    
                                            pageable={false}
                                            data={this.state.prods}
                                            style={{ maxHeight: "500px" }}                                            
                                        >
                                            {
                                                columns.map((column, index) => {
                                                    return <Column style={{textAlign:'center'}} field={column.field} title={column.title} key={index} className={column.className||'text-center'} format={column.format} 
                                                    width={column.width}/>
                                                })
                                            }                
                                            
                                        </Grid>
                                    </div>
                                   
                                </div>                                
                        </div>
                    </div>                    
                }
            />
        )
    }
}

//// http://localhost:8070/prods/get

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
         getAllProds : Actions.handleGetAllProducts
    }, dispatch);
}

function mapStateToProps({fuse, product})
{
    return {        
        prods : product.prods
    }
}


export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(React.memo(Home))));