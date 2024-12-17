import {
  AccordionContent,
} from "@/components/ui/accordion"
import { FaMicrochip, FaReact } from "react-icons/fa"
import { Progress } from "@/components/ui/progress"
import { BiLogoCPlusPlus, BiLogoCss3, BiLogoDjango, BiLogoFirebase, BiLogoFlutter, BiLogoHtml5, BiLogoJavascript, BiLogoPython, BiLogoTypescript } from "react-icons/bi";
import { TbFileTypeSql } from "react-icons/tb";
import { GrArchlinux } from "react-icons/gr";
import { VscRadioTower } from "react-icons/vsc";
import { SiArduino } from "react-icons/si";
import { IoHardwareChip } from "react-icons/io5";

export function FrontEndSkills() {
  const reactSkillLevel = 30
  const tsSkillLevel = 50
  const jsSkillLevel = 40
  const cssSkillLevel = 60
  const htmlSkillLevel = 70
  const flutterSkillLevel = 50

    return (
        <AccordionContent>
            <div className="flex flex-col gap-11">
            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <FaReact/>
                    <div className="items-center text-lg">
                    React
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {reactSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={reactSkillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <BiLogoTypescript/>
                    <div className="items-center text-lg">
                    TypeScript
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {tsSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={tsSkillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <BiLogoJavascript/>
                    <div className="items-center text-lg">
                    JavaScript
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {jsSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={jsSkillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <BiLogoCss3/>
                    <div className="items-center text-lg">
                    Css3
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {cssSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={cssSkillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <BiLogoHtml5/>
                    <div className="items-center text-lg">
                    Html5
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {htmlSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={htmlSkillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <BiLogoFlutter/>
                    <div className="items-center text-lg">
                        Flutter
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {flutterSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={flutterSkillLevel} className=""/>
                </div>
            </div>
        </div>
        </AccordionContent>
    )
}

export function BackEndSkills() {
    const djangoSkillLevel = 30
    const pythonSkillLevel = 50
    const tsqlSkillLevel = 60
    const fireBaseSkillLevel = 40
    const linuxSkillLevel = 80

    return (
        <AccordionContent>
            <div className="flex flex-col gap-11">
            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <GrArchlinux/>
                    <div className="items-center text-lg">
                        Linux 
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {linuxSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={linuxSkillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <BiLogoDjango/>
                    <div className="items-center text-lg">
                        Django
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {djangoSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={djangoSkillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <BiLogoPython/>
                    <div className="items-center text-lg">
                        Python
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {pythonSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={pythonSkillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <TbFileTypeSql/>
                    <div className="items-center text-lg">
                        Tsql
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {tsqlSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={tsqlSkillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <BiLogoFirebase/>
                    <div className="items-center text-lg">
                        Firebase
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {fireBaseSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={fireBaseSkillLevel} className=""/>
                </div>
            </div>
            </div>
        </AccordionContent>
    )
}

export function EmbeddedSkills() {
    const cppSkillLevel = 50
    const esp32SkillLevel = 60
    const arduinoSkillLevel = 50
    const iotSkillLevel = 40
    const firmwareSKillLevel = 40

    return (
        <AccordionContent>
            <div className="flex flex-col gap-11">
            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <IoHardwareChip/>
                    <div className="items-center text-lg">
                        Esp32
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {esp32SkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={esp32SkillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <BiLogoCPlusPlus/>
                    <div className="items-center text-lg">
                        C++
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {cppSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={cppSkillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <SiArduino/>
                    <div className="items-center text-lg">
                        Arduino
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {arduinoSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={arduinoSkillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <FaMicrochip/>
                    <div className="items-center text-lg">
                        Firmware
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {firmwareSKillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={firmwareSKillLevel} className=""/>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-col">
                <div className="flex items-center justify-between w-full">
                <div className="text-4xl flex gap-1">
                    <VscRadioTower/>
                    <div className="items-center text-lg">
                        IOT
                    </div>
                </div>
                <div className="text-[1rem] font-semibold">
                    <p> 
                    {iotSkillLevel}%
                    </p>
                </div>
                </div>
                <div className="flex justify-start w-full items-center">
                <Progress value={iotSkillLevel} className=""/>
                </div>
            </div>
            </div>
        </AccordionContent>
    )
}