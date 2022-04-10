import React from 'react';
import { colors } from '../../infrastructure/theme/colors';
import { fontSizes, fontWeights } from '../../infrastructure/theme/fonts';
import { Button } from '../button/button.component';

import { FlexibleDiv } from '../flexibleDiv/flexibleDiv.component';
import Calender from '../lineHistoryCard/calendar.component';
import { Radio } from '../radioButton/radioButton.component';
import { Spacer } from '../spacer/spacer.component';
import { DefaultCardstyle } from '../transactionCards/defualtcard.style';
import { Text } from '../typography/text.component';
import { Head, Type, Valuation } from './buildingblocks.component';

const TransactionOverviewCard = () => {

   

  
   
    
    return ( 
        <>
        <DefaultCardstyle padding={'0px'} width={'90%'}  >
            <FlexibleDiv paddingVertical={'0px'} flexDirection={'column'} >
                 
                 
                 <Head/>
                <Spacer/>
                
                <FlexibleDiv  flexWrap={'wrap'}  resFlexDirection={'column'}  paddingVertical={'0px'} flexDirection={'row'}  justifyContent={'space-evenly'} alignItems={'baseline'} width={'100%'} >
                <FlexibleDiv breakpointwidth={'100%'}  paddingVertical={'0px'} width={'25%'} justifyContent={'start'} alignItems={'start'}>
                <Text marginLeft={'49px'} color={colors.black.strong} fontWeight={fontWeights.bold} fontSize={fontSizes.body} >Line Activity</Text>
                <FlexibleDiv   paddingVertical={'0px'} >
                    <Valuation/>
                </FlexibleDiv>
                </FlexibleDiv>

                <Type/>
                </FlexibleDiv>
             


                <Spacer/>
            <FlexibleDiv justifyContent={"space-evenly"} flexDirection={'row'} alignItems={'baseline'} >
            <FlexibleDiv breakpointwidth={'100%'}  paddingVertical={'0px'}  justifyContent={'start'} width={"55%"}  >
                    <Calender/>
                </FlexibleDiv>
                <FlexibleDiv breakpointwidth={'100%'} flexDirection={'row'} justifyContent={'start'} width={"45%"}  >
                    <FlexibleDiv  width={'50%'} flexDirection={'column'}>
                        <Text fontSize={fontSizes.body} color={'#0fc90f;'} fontWeight={fontWeights.semiBold} >Depsoited</Text>
                        <Text fontWeight={fontWeights.semiBold} color={'#0fc90f;'}>25,000NGA</Text>
                        <Text>3</Text>
                    </FlexibleDiv>
                    <FlexibleDiv width={'50%'} flexDirection={'column'}>
                        <Text fontWeight={fontWeights.semiBold} fontSize={fontSizes.body} color={colors.red}>Withdrawed</Text>
                        <Text fontWeight={fontWeights.semiBold} color={colors.red}  >3,500NGA</Text>
                        <Text>3</Text>
                    </FlexibleDiv>
                </FlexibleDiv>
            </FlexibleDiv>
            <FlexibleDiv paddingVertical={'0px'} justifyContent={"space-evenly"} flexDirection={'row'} alignItems={'baseline'} >
            <FlexibleDiv alignItems={'start'}  paddingVertical={'0px'}  justifyContent={'start'} width={"50%"}  >
                    <Text resmargin={'auto'} marginLeft={'49px'} align={'start'}fontSize={fontSizes.body} fontWeight={fontWeights.semiBold} color={colors.primary} >See Line Histories</Text>
                </FlexibleDiv>
            <FlexibleDiv alignItems={'center'}  paddingVertical={'0px'} flexDirection={'column'}  justifyContent={'center'} width={"50%"}  >
                    <Text align={'center'} fontSize={fontSizes.body} fontWeight={fontWeights.bold} color={colors.black.strong} >Savings Balance</Text>
                    <Text align={'center'}   fontWeight={fontWeights.bold} color={colors.primary} >25,000NGA</Text>
                    <Spacer/>
                    <Button onClick={()=>{
                        alert('Your Withdrawal was Successful')
                    }} btnColor={colors.white} fontSize={fontSizes.button} background={colors.red} btnText={'WITHDRAW'} />
                </FlexibleDiv>
            </FlexibleDiv>
            <Spacer/>
            </FlexibleDiv>

        </DefaultCardstyle>
        </>
     );
}
 
export default TransactionOverviewCard;