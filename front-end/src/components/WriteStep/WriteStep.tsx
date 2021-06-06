import React from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

type WriteStepProps = {
}

const WriteStep: React.FC<WriteStepProps> = () => {
    return (
        <div id="WriteStep">
            <Input type="text" />
            <Button onClick={() => alert("Submit")} description="PRONTO" />
        </div>
    )
};

export default WriteStep;