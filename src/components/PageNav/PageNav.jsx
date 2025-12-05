import { useState, useEffect } from "react";
import { Box, Flex, Button, Spacer, Text, Center, Input } from "@chakra-ui/react";
import { all_blogs_paginated } from "../../utils/all_blogs_paginated";



export const PageNav = ({blogData, onPageChange, onErrorChange}) => {

    console.log("blog data", blogData)
    const { curPageNum, isNextPage, isPrevPage, totalPageNum } = blogData;
    const [targetPage, setTargetPage] = useState()

    
    async function updatePage(e){
        let new_page_num = -1

        console.log(e, e.target, e.target.direction)
   
        if (e.target.direction === "prev") {
            new_page_num = curPageNum - 1 > 0 ? curPageNum - 1: 1
        }

        if (e.target.direction === "next") {
            new_page_num =curPageNum + 1 > totalPageNum ? totalPageNum: curPageNum + 1
        }
  

        if (e.target.pageNum) {
            new_page_num = e.target.pageNum
        }

        
        console.log("hhhh")
        onPageChange(new_page_num)
    }

    function handleKeyDownOnEnter(e){
        if (e.key === "Enter"){
            e.preventDefault()
            console.log("enter key pressed, the current search bar value is", e.target.value)
            const targetPageNum = e.target.value 
            if (validateInput(targetPageNum)){
                const num = parseInt(targetPageNum)
                console.log("number used", num)
                e.target.pageNum = num
                updatePage(e)
                
            }else{
                console.log("show a message saying the input is not valid ")
            }
        }
    }

    function validateInput(inputData){
        if(isNaN(parseInt(inputData))){
            onErrorChange("pageSearchInput", "search should include only numbers" )
            return false
        }

        if (inputData < 1 || inputData > totalPageNum) {
            console.log("input page number out of bound")
            onErrorChange("pageSearchInput", "input page number out of bound" )
            return false
        }

        console.log("data valid", inputData)
        return true 
    }



    return (
        <>
        <Center w="100%">
            <Flex flexDirection="column"  marginBottom='1em' gap='5' >
                <Box>
                    <Flex justifyContent="space-evenly">
                        {isPrevPage && (
                            <Button onClick={(e)=> {
                            e.target.direction = "prev"
                            updatePage(e)
                            }} size="xs">Prev</Button>)}
                        
                        <Text>page: {curPageNum}</Text>

                        {isNextPage && ( <Button onClick={(e) => {
                            e.target.direction = "next"
                            updatePage(e)
                        }} size="xs" >Next</Button>)}

                    </Flex>
                </Box>
                <Box>
                    <Input
                    textAlign="center"
                    type="search"
                    onKeyDown={handleKeyDownOnEnter}
                    placeholder="Jump to page ..."
                    onChange={(e)=>{
                        console.log(e.target.value)
                        setTargetPage(e.target.value)}}
                    />

                    <Text>total page:{totalPageNum}</Text>
                    
                </Box>
            </Flex>
        </Center>
        </>
    )
}